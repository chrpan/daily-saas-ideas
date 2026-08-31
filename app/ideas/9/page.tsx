"use client";

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  ArrowRight,
  ArrowLeft,
  Clock,
  CheckCircle,
  XCircle,
  DollarSign,
  Globe,
  Zap,
  Shield,
  Code2,
  Search,
  AlertTriangle
} from "lucide-react";

export default function IdeaDetailPage() {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b bg-card sticky top-0 z-10">
        <div className="flex items-center justify-between px-4 py-4">
          <Link href="/" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
            <ArrowLeft className="h-4 w-4" />
            <span className="text-sm font-medium">Back to Ideas</span>
          </Link>
          <span className="text-sm text-muted-foreground">Daily SaaS Ideas Collection</span>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="flex items-center gap-2 mb-4 text-sm text-muted-foreground">
          <Link href="/" className="hover:text-foreground transition-colors">Ideas</Link>
          <ArrowRight className="h-3 w-3" />
          <span className="font-medium">Idea #9</span>
        </div>

        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <Badge className="text-base px-4 py-1">Idea #9</Badge>
            <Badge variant="outline" className="text-sm">AI / SaaS Audit</Badge>
          </div>
          <h1 className="text-3xl font-bold tracking-tight mb-2">Code Audit for AI-Built Apps (Secondread Model)</h1>
          <p className="text-lg text-muted-foreground">
            A self-serve audit that connects to a GitHub repo built by Bolt / Lovable / Replit / Cursor and returns a plain-language briefing: redundant services, scaling ceilings, fragile auth layers, hidden infra bills. Non-technical founders who shipped fast with AI can't read their own codebase when costs spike — this closes the gap. €49 one-shot snapshot, €199/mo monitoring. Growth via Indie Hackers, founder Slack groups, and curation partnerships with Bolt / Replit / Lovable.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
          {[
            { label: "Category", value: "AI / SaaS Audit" },
            { label: "Target Market", value: "Non-technical founders, AI coders" },
            { label: "Pricing Model", value: "€49 snapshot / €199/mo" },
            { label: "Build Time", value: "4-6 weeks" },
            { label: "Reference", value: "Bolt, Lovable, Replit, Vercel" },
            { label: "Compliance", value: "GDPR, EU-hosted, read-only" }
          ].map((meta, i) => (
            <Card key={i} className="bg-muted/50">
              <CardContent className="p-4">
                <div className="text-xs text-muted-foreground uppercase tracking-wide mb-1">{meta.label}</div>
                <div className="text-sm font-medium">{meta.value}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <span className="text-destructive">❌</span> The Problem
          </h2>
          <Card>
            <CardHeader>
              <CardTitle className="text-xl">Founders Ship with AI, Then Can't Read Their Own Repo</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                AI coding tools (Bolt, Lovable, Replit, Cursor) let non-technical founders spin up full apps in hours — but the output is a black box they don't know how to maintain, debug, or cost-optimize. When infra bills spike or a dependency breaks, they're locked out of their own business. The core problems:
              </p>
              <div className="space-y-3">
                {[
                  {
                    title: "Unreadable generated codebases",
                    desc: "Founders ship production apps they cannot audit. They don't know which services are redundant, which auth flow is fragile, or why the bill jumped."
                  },
                  {
                    title: "Invisible infra cost creep",
                    desc: "A Bolt/Lovable app can spin up 6 services, 3 DBs, and a CDN the founder didn't knowingly provision. The bill arrives monthly; the founder has no map of what they're paying for."
                  },
                  {
                    title: "No expert available at founder scale",
                    desc: "At €0-5K/mo revenue, a €200/hr engineer audit is too expensive to run monthly. The founder needs a priced-on-value, scoped-readout — not a full engagement."
                  },
                  {
                    title: "Founder community is the distribution",
                    desc: "Indie Hackers, X, and the Bolt/Lovable Replit discords are full of posts titled 'my Vercel bill spiked 10x' and 'how do I even read this code?' — unmet demand with a clear persona."
                  }
                ].map((item) => (
                  <div key={item.title} className="flex gap-3">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-destructive/10 flex items-center justify-center text-destructive">
                      <XCircle className="h-4 w-4" />
                    </div>
                    <div>
                      <div className="font-medium">{item.title}</div>
                      <div className="text-sm text-muted-foreground">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-r from-primary to-secondary text-primary-foreground mt-4">
            <CardContent className="p-6">
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 rounded-full bg-white/20 p-2">
                  <Zap className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2 text-primary-foreground">💡 The Insight</h3>
                  <p className="text-sm text-primary-foreground/80">
                    The audit is not a code review — it's a plain-language operations briefing. The buyer doesn't need to understand the stack; they need to know what it costs, what breaks first, and what to fix before it costs more.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <span className="text-green-500">✅</span> The Solution
          </h2>
          <Card>
            <CardHeader>
              <CardTitle className="text-xl">Plain-Language Infra & Code Audit for AI-Built Apps</CardTitle>
              <CardDescription>Connect a GitHub repo, get back a readable briefing: redundant services, scaling ceilings, fragile auth, hidden costs — with a one-click fix guide</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {[
                  {
                    icon: <Code2 className="h-5 w-5" />,
                    title: "Read-Only Repo Scan",
                    desc: "Connect the GitHub repo over read-only token; scan dependencies, services, env refs, billing surfaces. No write access, no risk."
                  },
                  {
                    icon: <Search className="h-5 w-5" />,
                    title: "Plain-Language Briefing",
                    desc: "Return a human-readable report, not a grep log: 'You're running 3 Postgres instances — 2 are unused. Here's how to cut the bill.'"
                  },
                  {
                    icon: <AlertTriangle className="h-5 w-5" />,
                    title: "Fragility Flags",
                    desc: "Flag brittle auth flows, single-region deploys, no test coverage on critical paths, deprecated deps — ranked by 'will this break first'."
                  },
                  {
                    icon: <Shield className="h-5 w-5" />,
                    title: "Pattern Library Grows with Each Audit",
                    desc: "Every audit sharpens a reusable pattern library (common Bolt/Lovable footguns, typical Vercel over-provisioning, classic Supabase room-for-billing confusion). The 50th audit runs faster."
                  },
                  {
                    icon: <DollarSign className="h-5 w-5" />,
                    title: "Cost Reconstruction",
                    desc: "Map each service to the bill line item where possible. 'This function runs every webhook — at your current volume it's €X/mo; this one is almost free.'"
                  },
                  {
                    icon: <Globe className="h-5 w-5" />,
                    title: "EU-Sovereign, Read-Only",
                    desc: "Run from EU; the audit token is read-only and scoped. GDPR-conscious founders and EU-based AI-tool users can run it without shipping code elsewhere."
                  }
                ].map((feature) => (
                  <Card key={feature.title} className="bg-muted/30 border-dashed">
                    <CardHeader>
                      <div className="flex items-center gap-2 text-primary mb-2">{feature.icon}</div>
                      <CardTitle className="text-base">{feature.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">{feature.desc}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <span className="text-blue-500">📊</span> Market Validation
          </h2>
          <Card>
            <CardHeader>
              <CardTitle className="text-xl">Market Validation (from Research)</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <div className="text-sm font-medium text-green-800 mb-3">📈 Reference Signals</div>
                <ul className="space-y-2 text-sm">
                  <li className="flex justify-between">
                    <span><strong>Bolt / Lovable / Replit / Cursor user growth</strong></span>
                    <span className="font-mono">high-volume, non-technical cohort</span>
                  </li>
                  <li className="flex justify-between">
                    <span><strong>Indie Hackers / X posts</strong></span>
                    <span className="font-mono">'Vercel bill spiked 10x', 'how do I read this?'</span>
                  </li>
                  <li className="flex justify-between">
                    <span><strong>AI Tools Assessment</strong> (killed, same founder)</span>
                    <span className="font-mono">assessment-as-funnel pattern, validated</span>
                  </li>
                  <li className="flex justify-between">
                    <span><strong>Conservative MRR model</strong></span>
                    <span className="font-mono">€5-10K at 100 snapshots + 20 monitors</span>
                  </li>
                </ul>
              </div>

              <Separator />

              <div>
                <h3 className="text-lg font-semibold mb-4">Why This Wins</h3>
                <div className="space-y-3">
                  {[
                    {
                      title: "Persona is defined by their tool, not their industry",
                      desc: "Every Bolt/Lovable founder is the same buyer: non-technical, just shipped, now sweating infra. Easy to target via the tool's own community."
                    },
                    {
                      title: "Audit-first converts to monitoring + referrals",
                      desc: "The one-shot snapshot is the wedge; the €199/mo monitoring + pattern-library delta is the recurring. One audit also surfaces adjacent needs (agency handoff, migration)."
                    },
                    {
                      title: "Tool partnerships are a distribution shortcut",
                      desc: "Bolt / Lovable / Replit forums already host the pain; a priced audit posted where the posts already happen is a direct path. Curation partnership is the scalable version."
                    },
                    {
                      title: "Pattern library compounds",
                      desc: "Each audit adds to a reusable library of common AI-build footguns. The 50th audit is faster than the first; margins improve with volume."
                    }
                  ].map((item, i) => (
                    <div key={i} className="flex gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <div>
                        <div className="font-medium">{item.title}</div>
                        <div className="text-sm text-muted-foreground">{item.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <span className="text-purple-500">💰</span> Pricing Strategy
          </h2>
          <Card>
            <CardHeader>
              <CardTitle className="text-xl">Snapshot + Monitoring, Scoped to Value</CardTitle>
              <CardDescription>€49 for a one-shot audit readout, €199/mo for ongoing monitoring + delta reports — priced for the founder's bill, not an engineer's hourly rate</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-2">
                {[
                  {
                    name: "Snapshot",
                    price: "€49",
                    desc: "One repo scan, plain-language briefing, fragility flags, cost reconstruction, fix guide. Delivered in 24h.",
                    features: [
                      "Read-only GitHub connect",
                      "Plain-language briefing",
                      "Fragility flags ranked by risk",
                      "Cost reconstruction per service",
                      "One-click fix guide"
                    ],
                    popular: false
                  },
                  {
                    name: "Monitoring",
                    price: "€199/mo",
                    desc: "Continuous scan of the repo + linked infra surfaces; delta reports when a new service, dependency, or billing surface appears; monthly briefing.",
                    features: [
                      "Continuous repo scan",
                      "Monthly delta report",
                      "New-service alerts",
                      "Pattern-library updates",
                      "Priority fix-guide refresh"
                    ],
                    popular: true
                  }
                ].map((plan) => (
                  <Card key={plan.name} className={plan.popular ? "ring-2 ring-primary border-primary" : ""}>
                    <CardHeader className="text-center">
                      {plan.popular && (
                        <Badge className="bg-primary text-primary-foreground mb-2">Most Popular</Badge>
                      )}
                      <CardTitle className="text-lg">{plan.name}</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="text-2xl font-bold text-center mb-2">{plan.price}</div>
                      <p className="text-sm text-muted-foreground text-center">{plan.desc}</p>
                      <ul className="space-y-2">
                        {plan.features.map((f) => (
                          <li key={f} className="flex items-center gap-2 text-sm">
                            <CheckCircle className="h-4 w-4 text-green-500" />
                            {f}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                    <CardFooter className="border-t">
                      <Button variant={plan.popular ? "default" : "outline"} className="w-full">
                        {plan.popular ? "Start Monitoring" : "Buy Snapshot"}
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
              <p className="text-sm text-muted-foreground text-center mt-4">
                Conservative M12: €5-10K MRR (~€60-120K ARR) at 100 snapshots/mo + 20 monitors. Channel growth via Indie Hackers posts, founder Slack groups, and curation partnerships with Bolt/Lovable/Replit.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <span className="text-gray-500">⚡</span> Tech Stack
          </h2>
          <Card>
            <CardHeader>
              <CardTitle className="text-xl">Minimal, Read-Only Stack</CardTitle>
              <CardDescription>Next.js frontend, read-only GitHub connector, analysis engine, plain-language report generator — EU-hosted, no write access anywhere</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex flex-wrap gap-2">
                {[
                  "Next.js 14 (App Router)",
                  "Supabase (PostgreSQL + Auth)",
                  "GitHub read-only token scope",
                  "Static analysis + LLM briefing layer",
                  "Vercel / Hetzner (EU regions)",
                  "Tailwind CSS + TypeScript",
                  "Pattern-library DB (grows with audits)",
                  "DPA-ready EU hosting"
                ].map((tech) => (
                  <Badge key={tech} variant="outline" className="bg-muted/50">
                    {tech}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <span className="text-orange-500">📅</span> 4-Week Validation Sprint
          </h2>
          <Card>
            <CardHeader>
              <CardTitle className="text-xl">Validate the Briefing Before Building Monitoring</CardTitle>
              <CardDescription>Run the first audits by hand, tune the briefing voice, then automate and add monitoring</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {[
                {
                  week: "Week 1",
                  title: "Problem Discovery (10 interviews)",
                  desc: "Talk to 5 Bolt/Lovable/Replit founders in Indie Hackers + X. Confirm the bill-shock moment and the 'I can't read this code' pain. Ask what they'd pay for a one-page readout."
                },
                {
                  week: "Week 2",
                  title: "Landing Page + First Paid Snapshots",
                  desc: "Page: 'Connect your AI-built repo, get a plain-language audit in 24h.' Post in the relevant communities. Target: 3 paid snapshots (€147)."
                },
                {
                  week: "Week 3",
                  title: "Vertical-Slice MVP (hand-run)",
                  desc: "Run 3 audits by hand: connect repo, scan, write the briefing in the target voice. Measure founder reaction: 'saved me from X' vs 'I already knew this'."
                },
                {
                  week: "Week 4",
                  title: "Automate + Scope Monitoring",
                  desc: "Turn the hand-run briefing into the automated readout. Add the monitoring upsell. Scope the pattern library from the first 3 audits. Target: 1 monitoring conversion."
                }
              ].map((step) => (
                <div key={step.week} className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center">
                    <Clock className="h-4 w-4" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <Badge variant="outline" className="text-xs">{step.week}</Badge>
                      <h3 className="font-semibold">{step.title}</h3>
                    </div>
                    <p className="text-sm text-muted-foreground">{step.desc}</p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6 mb-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-xl">Dogfooding Plan (Limeon srl)</CardTitle>
              <CardDescription>Validate by auditing Limeon's own infra and AI-coded surfaces first, then clone verticals</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              {[
                "Run a read-only audit on Limeon srl's own repos and infra — find the redundancies the founder already suspects but hasn't acted on",
                "Use the briefing voice on a real internal repo; measure whether the founder would pay €49 for that readout",
                "Offer one free snapshot to a founder in the existing network in exchange for a testimonial + a public post",
                "Once the briefing is validated, clone verticals: Bolt/Lovable founders, Indie Hackers, EU AI-coder communities"
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">{item}</span>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-xl">Competitive Landscape & Moat</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <ScrollArea className="max-h-[400px] overflow-y-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-[40%]">Feature</TableHead>
                      <TableHead className="w=[30%]">Generalist code review / infra tools</TableHead>
                      <TableHead className="w-[30%]">This Idea</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {[
                      ["Audience", "Senior eng teams, enterprises", "Non-technical founders, AI coders"],
                      ["Output", "Code-level review comments", "Plain-language briefing + fix guide"],
                      ["Billing focus", "Rarely addressed", "Cost reconstruction per service"],
                      ["Pricing", "€€/hr or enterprise", "€49 snapshot / €199/mo"],
                      ["Access model", "Often write access", "Read-only GitHub token"],
                      ["Pattern library", "None / per-engagement", "Compounds across audits"]
                    ].map(([feature, current, us]) => (
                      <TableRow key={feature}>
                        <TableCell className="font-medium">{feature}</TableCell>
                        <TableCell className="text-muted-foreground">{current}</TableCell>
                        <TableCell className="text-primary">{us}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </ScrollArea>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-xl">Risks & Mitigations</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {[
                {
                  risk: "Audit commoditizes as LLMs get better at reading code",
                  mitigation: "The moat is the briefing voice, the pattern library, and the fix-guide format — not the scan itself. Keep the readout opinionated and founder-readable, not a generic lint log."
                },
                {
                  risk: "Founders won't pay before they've been burned",
                  mitigation: "Lead with the bill-shock narrative in the communities where it already happens. The €49 price is below the 'one bad line item' threshold; anchor on that."
                },
                {
                  risk: "Scope creeps into full dev-audit / agency work",
                  mitigation: "Stay narrow: one repo, one-page briefing, fix guide. Full audit engagements are a different business. Defend the self-serve shape."
                },
                {
                  risk: "Tool dependence on Bolt/Lovable/Replit communities",
                  mitigation: "The persona is tool-independent: any non-technical founder with an AI-built repo. Treat the tool communities as the first distribution layer, not the whole market."
                }
              ].map((item) => (
                <div key={item.risk} className="flex gap-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-destructive/10 flex items-center justify-center text-destructive">
                    <XCircle className="h-4 w-4" />
                  </div>
                  <div>
                    <div className="font-medium">{item.risk}</div>
                    <div className="text-sm text-muted-foreground">{item.mitigation}</div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        <Separator className="my-8" />
        <div className="flex items-center justify-between text-sm text-muted-foreground">
          <p>Built with Next.js, shadcn/ui, and deployed on Vercel</p>
          <Link href="https://github.com/chrpan/daily-saas-ideas" className="underline hover:text-foreground" target="_blank" rel="noopener noreferrer">
            View on GitHub
          </Link>
        </div>
      </main>
    </div>
  );
}
