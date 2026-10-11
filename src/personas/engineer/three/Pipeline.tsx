import { useMemo, useRef, useEffect, useState } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import * as THREE from 'three'
import { NODES, EDGES, KIND_COLOR, type PNode } from './pipeline-data'

const byId = (id: string) => NODES.find(n => n.id === id)!
const PER_EDGE = 5
const isSpine = (k: string) => k !== 'source' && k !== 'tracker'

function Edges() {
  const geo = useMemo(() => {
    const pts: number[] = [], col: number[] = []
    EDGES.forEach(([a, b]) => {
      const A = byId(a), B = byId(b)
      const c = new THREE.Color(isSpine(A.kind) ? '#33414d' : '#1f2832')
      pts.push(...A.pos, ...B.pos)
      col.push(c.r, c.g, c.b, c.r, c.g, c.b)
    })
    const g = new THREE.BufferGeometry()
    g.setAttribute('position', new THREE.Float32BufferAttribute(pts, 3))
    g.setAttribute('color', new THREE.Float32BufferAttribute(col, 3))
    return g
  }, [])
  return <lineSegments geometry={geo}><lineBasicMaterial vertexColors transparent opacity={0.85} /></lineSegments>
}

function Flow({ reduced }: { reduced: boolean }) {
  const ref = useRef<THREE.Points>(null!)
  const { positions, lanes } = useMemo(() => {
    const lanes: { a: THREE.Vector3; b: THREE.Vector3; t: number; s: number }[] = []
    EDGES.forEach(([a, b]) => {
      const A = new THREE.Vector3(...byId(a).pos), B = new THREE.Vector3(...byId(b).pos)
      const sp = isSpine(byId(a).kind)
      for (let i = 0; i < PER_EDGE; i++) lanes.push({ a: A, b: B, t: i / PER_EDGE, s: sp ? 0.3 : 0.16 })
    })
    return { positions: new Float32Array(lanes.length * 3), lanes }
  }, [])
  useFrame((_, dt) => {
    if (reduced) return
    const arr = ref.current.geometry.attributes.position.array as Float32Array
    for (let i = 0; i < lanes.length; i++) {
      const L = lanes[i]; L.t = (L.t + dt * L.s) % 1
      const e = L.t * L.t * (3 - 2 * L.t)
      arr[i * 3] = L.a.x + (L.b.x - L.a.x) * e
      arr[i * 3 + 1] = L.a.y + (L.b.y - L.a.y) * e
      arr[i * 3 + 2] = L.a.z + (L.b.z - L.a.z) * e
    }
    ref.current.geometry.attributes.position.needsUpdate = true
  })
  return (
    <points ref={ref}>
      <bufferGeometry><bufferAttribute attach="attributes-position" args={[positions, 3]} /></bufferGeometry>
      <pointsMaterial size={0.09} color="#5EE6D0" transparent opacity={0.95}
        sizeAttenuation depthWrite={false} blending={THREE.AdditiveBlending} />
    </points>
  )
}

function Dots() {
  return (
    <>
      {NODES.map((n: PNode) => {
        const big = n.kind === 'store' || n.kind === 'normalise'
        const r = big ? 0.19 : n.kind === 'out' || n.kind === 'transport' ? 0.13 : 0.08
        const c = KIND_COLOR[n.kind]
        return (
          <group key={n.id} position={n.pos}>
            <mesh><sphereGeometry args={[r, 18, 18]} /><meshBasicMaterial color={c} toneMapped={false} /></mesh>
            <mesh><sphereGeometry args={[r * 2.8, 12, 12]} />
              <meshBasicMaterial color={c} transparent opacity={0.08} depthWrite={false} /></mesh>
          </group>
        )
      })}
    </>
  )
}

/** Projects node positions to screen space and writes transforms straight to the DOM. */
function Labels({ layer, reduced }: { layer: React.RefObject<HTMLDivElement>; reduced: boolean }) {
  const g = useRef<THREE.Group>(null!)
  const { camera, size } = useThree()
  const v = useMemo(() => new THREE.Vector3(), [])
  useFrame((state) => {
    if (g.current) {
      const t = state.clock.elapsedTime
      const idle = reduced ? 0 : Math.sin(t * 0.14) * 0.1
      g.current.rotation.y += ((state.pointer.x * 0.2 + idle) - g.current.rotation.y) * 0.045
      g.current.rotation.x += ((-state.pointer.y * 0.1 - 0.06) - g.current.rotation.x) * 0.045
    }
    const host = layer.current
    if (!host) return
    NODES.forEach((n, i) => {
      const el = host.children[i] as HTMLElement
      if (!el) return
      v.set(...n.pos).applyMatrix4(g.current.matrixWorld).project(camera)
      const x = (v.x * 0.5 + 0.5) * size.width
      const y = (-v.y * 0.5 + 0.5) * size.height
      el.style.transform = `translate3d(${x}px,${y}px,0) translate(-50%,-50%)`
      el.style.opacity = v.z > 1 ? '0' : '1'
    })
  })
  return <group ref={g}><Edges /><Flow reduced={reduced} /><Dots /></group>
}

function Rig({ layer, reduced }: { layer: React.RefObject<HTMLDivElement>; reduced: boolean }) {
  const { viewport, camera } = useThree()
  useEffect(() => {
    const narrow = viewport.width < 9
    camera.position.set(0, 1.5, narrow ? 15.5 : 11.5)
    camera.updateProjectionMatrix()
  }, [viewport.width, camera])
  return <Labels layer={layer} reduced={reduced} />
}

export default function Pipeline() {
  const layer = useRef<HTMLDivElement>(null)
  const [reduced, setReduced] = useState(false)
  useEffect(() => { setReduced(window.matchMedia('(prefers-reduced-motion: reduce)').matches) }, [])
  return (
    <div className="viz">
      <Canvas dpr={[1, 1.75]} camera={{ position: [0, 1.5, 11.5], fov: 42 }}
        gl={{ antialias: true, powerPreference: 'high-performance' }}>
        <Rig layer={layer} reduced={reduced} />
      </Canvas>
      <div className="viz-labels" ref={layer} aria-hidden="true">
        {NODES.map(n => (
          <div className={`vl vl-${n.kind}`} key={n.id}>
            <span className="vl-t">{n.label}</span>
            {n.note && <span className="vl-n">{n.note}</span>}
          </div>
        ))}
      </div>
    </div>
  )
}
