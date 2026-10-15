export const PERSON = {
  name: 'Anmol Jain',
  role: 'SDE-II · Team Lead',
  company: 'Idea Clan',
  location: 'Chandigarh, India',
  email: 'anmoljain987@gmail.com',
  linkedin: 'https://www.linkedin.com/in/anmoljain987/',
  github: 'https://github.com/anmoljain987',
}

export const HERO = {
  line1: 'Fifteen sources',
  line2: 'disagree.',
  line3: 'I make them',
  line4: 'agree.',
  sub: 'I build across the whole stack on two advertising SaaS products — the React front end, the GraphQL layer that feeds it, the integration services behind that, the pipeline underneath them, and the automation that acts on live ad accounts.',
}

/** Every number here is measured. `how` is shown on hover. */
export const METRICS = [
  { k: '600B', unit: 'rows / month', label: 'scanned across four production ClickHouse clusters',
    how: 'system.query_log, 30-day window, all replicas' },
  { k: '113–216', unit: 'ms p95', label: 'query latency held under load',
    how: 'same query_log window, per cluster' },
  { k: '2.3B', unit: 'rows stored', label: 'live across the four clusters',
    how: 'system.parts, active parts only' },
  { k: '~40', unit: 'of 95 services', label: 'owned outright; shipped in 89 of 104 repos',
    how: 'service ownership register + git authorship' },
  { k: '1,700', unit: 'runs / day', label: 'automation firing on a strict 15-minute cycle',
    how: '100.0% of its queries land on :00/:15/:30/:45' },
  { k: '10', unit: 'services originated', label: 'across two generations of the platform',
    how: 'first-commit authorship' },
]

export const WORK = [
  {
    t: 'The reconciliation layer',
    d: 'Twelve ad platforms and three revenue trackers, each with its own auth, rate limits, pagination and metric definitions. One schema underneath, so a single query compares spend and revenue across all of them.',
    tags: ['TypeScript', 'GraphQL Federation', 'ClickHouse'],
  },
  {
    t: 'A class of bug, not an instance',
    d: 'Derived metrics were failing on four platforms. The obvious fix passed its own test and would have shipped 56 regressions, because adding a clicks alias shadowed the raw column other aggregates wrapped. Found by exhaustive re-sweep; fixed per-platform.',
    tags: ['ClickHouse', 'Query engines', 'Root cause'],
  },
  {
    t: 'Tests where there were none',
    d: 'A harness that runs each service’s real composed GraphQL schema with only the I/O boundary mocked. 700+ cases across the three highest-risk services. Within days it caught a defect shipped by its own author.',
    tags: ['Vitest', 'Apollo Federation', 'Contract tests'],
  },
  {
    t: '44 services audited, then re-verified',
    d: '770 evidence-backed findings with file and line. Platform-wide defects remediated in multi-tenant authentication, SQL parameterisation and dependency resolution. The second pass is the part most audits skip.',
    tags: ['Security', 'Multi-tenancy', 'Audit'],
  },
  {
    t: 'A playbook, not a project',
    d: 'Standing up a new platform integration used to be bespoke. It is now a documented procedure: API grounding, data model, permissions, ingest path, charts, frontend. Build time halved; five tracks ran in parallel across three engineers.',
    tags: ['Platform', 'React', 'End to end'],
  },
  {
    t: 'Standards beyond my own team',
    d: 'Authored the frontend branching and merge policy the organisation adopted, and brokered the working agreement between QA and engineering that ended a multi-day dispute. 122 implementation guides across 42 repositories behind both.',
    tags: ['Frontend policy', 'Governance', 'Process'],
  },
]

export const PRINCIPLES = [
  { t: 'Fix the layer that owns the problem', d: 'Not the file in front of me. A patch at the caller vanishes in the next refactor; a fix at the owning layer survives and generalises.' },
  { t: 'Measure, do not estimate', d: 'Every figure on this page came out of a system I can query again. If a number looks surprising, ask me how it was counted.' },
  { t: 'Solve once, not twelve times', d: 'Most of what I have built exists because the same problem appeared in more than one place and I would rather write the standard than the patch.' },
  { t: 'Be wrong quickly', d: 'I propose things people are fairly sure will not work. I used to argue. Now I measure, and I have been wrong often enough to stop minding.' },
]

export const TIMELINE = [
  { y: 'Jun 2022', t: 'Junior Software Developer', d: 'Joined Idea Clan. First engineering role.' },
  { y: '< 12 mo', t: 'Managing someone', d: 'Before the end of the first year.' },
  { y: 'Sep 2022', t: 'Full Stack Developer', d: 'First promotion, at three months.' },
  { y: 'Apr 2024', t: 'SDE-II · Team Lead', d: 'Leading the team by month 22. Still writing code daily.' },
]

/** Before software. The coaching numbers are the same kind of claim as the
 *  rest of this page: counted, not rounded up. */
export const BEFORE = {
  lede: 'I played table tennis at national level and coached for five years before I wrote any software.',
  stats: [
    { k: '50+', u: 'students coached' },
    { k: '15', u: 'reached state level' },
    { k: '7', u: 'reached national level' },
    { k: '5', u: 'years coaching' },
  ],
  note: 'Reading a pattern instead of reacting to the last point is the same instinct in both jobs.',
}

export const EDUCATION = [
  { y: '2021 – 2022', t: 'Masai School, Bengaluru', d: 'Full Stack Web Development' },
  { y: '2018 – 2021', t: 'Guru Nanak Khalsa College', d: 'BSc, Sports Science' },
  { y: '2016 – 2018', t: 'Kendriya Vidyalaya No.1, Ambala', d: 'Senior School, CBSE' },
]

/** The full-stack claim, made specific. Every layer here is one he ships in,
 *  not one he has an opinion about. */
export const STACK = [
  {
    layer: 'Interface',
    what: 'Reporting tables, filter builders, launch flows. I wrote the branching and merge policy the whole frontend team now runs on, and I review the PRs against it.',
    tools: ['React', 'TypeScript', 'Vite', 'Redux Toolkit', 'React Hook Form'],
  },
  {
    layer: 'API',
    what: 'One federated graph over a dozen subgraphs, plus the REST routes services call each other on. Schema changes are contracts, so they ship back end first.',
    tools: ['GraphQL Federation', 'Apollo', 'REST'],
  },
  {
    layer: 'Services',
    what: 'Around forty of the ninety-five services in the ecosystem, and I have shipped in eighty-nine of the hundred and four repositories.',
    tools: ['Node.js', 'TypeScript', 'Python', 'Celery'],
  },
  {
    layer: 'Messaging',
    what: 'Fan-out and fan-in across platform syncs, bulk actions and the automation engine. Idempotency and replay are the hard parts, not throughput.',
    tools: ['Kafka', 'RabbitMQ', 'Temporal'],
  },
  {
    layer: 'Storage',
    what: 'Four production ClickHouse clusters for analytics, Postgres for state, Redis for the hot path. Sort keys and dedupe strategy decided per table, not by default.',
    tools: ['ClickHouse', 'Postgres', 'Redis', 'Vector'],
  },
  {
    layer: 'Run',
    what: 'The services I own are deployed, observed and alerted on by me. If it pages at 3am it is mine to answer.',
    tools: ['Kubernetes', 'Argo CD', 'AWS', 'Jenkins', 'Grafana', 'OpenTelemetry'],
  },
]

/** Recognition. Third-party first — a vendor publishing a case study about
 *  your work outranks anything self-reported. */
export const RECOGNITION = [
  {
    y: 'Dec 2025',
    t: 'ClickHouse published a case study on FabFunnel',
    d: 'Queries from 11 seconds to under one. 11.67 trillion rows read and 606 TB handled, all time, at the time of writing. Their numbers, not ours.',
    tag: 'Case study',
  },
  {
    y: 'Mar 2025',
    t: 'Speaker, ClickHouse Meetup Gurgaon',
    d: '"FabFunnel & ClickHouse — Real-Time Marketing Analytics", with Siddhant Gaba.',
    tag: 'Talk',
  },
  {
    y: 'Apr 2026',
    t: 'Above & Beyond Innovations Award, Idea Clan',
    d: 'Fourth recognition in four years.',
    tag: 'Award',
  },
  {
    y: '2025',
    t: 'Catalyst Award, Idea Clan',
    d: 'For being the cause in the matter. Third consecutive year.',
    tag: 'Award',
  },
  {
    y: '2025',
    t: 'Apollo GraphQL — API Orchestration, Associate',
    d: 'Certification.',
    tag: 'Cert',
  },
]
