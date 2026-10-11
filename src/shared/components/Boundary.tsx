import { Component, type ReactNode } from 'react'

/** Anything that can fail at runtime (WebGL, GPU loss) must not take the page with it. */
export default class Boundary extends Component<
  { children: ReactNode; fallback: ReactNode }, { dead: boolean }
> {
  state = { dead: false }
  static getDerivedStateFromError() { return { dead: true } }
  componentDidCatch(err: unknown) { console.warn('[boundary] falling back:', err) }
  render() { return this.state.dead ? this.props.fallback : this.props.children }
}
