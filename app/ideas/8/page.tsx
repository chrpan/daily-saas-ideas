"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { CheckCircle, XCircle, Tag, Zap, Users, DollarSign, Globe, Shield, ArrowRight, Clock, ArrowLeft } from "lucide-react";
import Link from "next/link";

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
          <span className="font-medium">Idea #8</span>
        </div>

        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <Badge className="text-base px-4 py-1">Idea #8</Badge>
            <Badge variant="outline" className="text-sm">IT Support / Helpdesk</Badge>
          </div>
          <h1 className="text-3xl font-bold tracking-tight mb-2">Context-Aware Helpdesk for EU Small Teams (MSP White-Label)</h1>
          <p className="text-lg text-muted-foreground">
            A helpdesk that auto-triages internal support tickets, pulls context from the team's own tools, drafts a plain-language reply in DE/IT/EN, and routes to the right person — white-labeled and resold by MSPs. EU-hosted, self-serve, dogfooded on Limeon srl first.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
          {[
            { label: "Category", value: "IT Support / Helpdesk" },
            { label: "Target Market", value: "EU small teams / MSP" },
            { label: "Pricing Model", value: "€29-99/mo" },
            { label: "Build Time", value: "3-4 weeks" },
            { label: "Reference", value: "Zendesk / Freshdesk" },
            { label: "Compliance", value: "GDPR, EU-hosted" }
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
              <CardTitle className="text-xl">Small EU Teams Drown in Context-Free Support Tickets</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Internal IT/support for EU SMBs is reactive and context-blind. A ticket arrives ("VPN down", "can't open the Q3 file") with zero history; the MSP serving 40 SMBs can't staff 24/7 triage; replies lag in three languages. The core problems:
              </p>
              <div className="space-y-3">
                {[
                  { title: "No shared memory across tickets", desc: "Each ticket is a cold start. The same printer issue, the same onboarding question gets re-answered from zero because past resolutions live in someone's inbox, not a retrievable KB." },
                  { title: "MSPs can't scale triage across 40 clients", desc: "A solo MSP or small IT shop serves dozens of SMBs; a first-response SLA is impossible without a human per client. Ticket volume scales faster than headcount." },
                  { title: "Language split (DE / IT / EN)", desc: "Alpine/EU teams mix German, Italian, English. A generic helpdesk replies in English; the SMB owner stalls. Localized first-response is the unlock." },
                  { title: "Opaque, US-hosted tools", desc: "Zendesk/Freshdesk are US-hosted and overbuilt for a 15-person team; GDPR-bound MSPs won't pipe client tickets through them. EU-hosted, scoped-to-triage is the wedge." }
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
                    The moat is not ticketing — that's a database. The moat is context retrieval + localized draft + MSP white-label. Sell the first response, not the inbox. Switching cost lives in the team's resolved-ticket KB, not in lock-in.
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
              <CardTitle className="text-xl">Context-Aware, MSP-White-Label Helpdesk</CardTitle>
              <CardDescription>An agent that ingests tickets, retrieves related past tickets + connected docs, drafts a plain-language reply in the team's language, and routes to the right person — EU-hosted, white-labelable</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {[
                  {
                    icon: <Globe className="h-5 w-5" />,
                    title: "Context Retriever",
                    desc: "Pulls related past tickets + linked docs (email, Drive, wiki) so the reply isn't a cold start. 'Last time the Q3 file broke, it was a permissions reset — here's the link.'"
                  },
                  {
                    icon: <Shield className="h-5 w-5" />,
                    title: "Localized First Response",
                    desc: "Drafts the reply in DE / IT / EN from the team's own tone; the human edits one line, not writes from scratch."
                  },
                  {
                    icon: <Zap className="h-5 w-5" />,
                    title: "Smart Routing",
                    desc: "Classifies urgency + domain (networking, account, payroll) and assigns to the right person or MSP queue — no 'who handles this?' ping-pong."
                  },
                  {
                    icon: <Users className="h-5 w-5" />,
                    title: "MSP White-Label",
                    desc: "One MSP account, many client teams, branded portal + reply footer. The MSP resells it as their support desk."
                  },
                  {
                    icon: <DollarSign className="h-5 w-5" />,
                    title: "EU-Sovereign, Scoped",
                    desc: "Runs on Hetzner/EU region. Ticket content stays in-region; GDPR Art. 28 DPA included. Safe for GDPR-bound MSPs."
                  },
                  {
                    icon: <CheckCircle className="h-5 w-5" />,
                    title: "Resolution KB",
                    desc: "Every closed ticket becomes a retrievable answer. The KB compounds; the next identical ticket auto-suggests the past fix."
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
                ))
              }
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
                <div className="text-sm font-medium text-green-800 mb-3">📈 Reference Revenue Data</div>
                <ul className="space-y-2 text-sm">
                  <li className="flex justify-between">
                    <span><strong>Zendesk</strong> (helpdesk category)</span>
                    <span className="font-mono">public, multi-bn</span>
                  </li>
                  <li className="flex justify-between">
                    <span><strong>Freshdesk / Hetzner regions</strong> (EU mid-market)</span>
                    <span className="font-mono">established</span>
                  </li>
                  <li className="flex justify-between">
                    <span><strong>r/msp, r/sysadmin pain threads</strong> (triage)</span>
                    <span className="font-mono">recurring, unmet</span>
                  </li>
                  <li className="flex justify-between">
                    <span><strong>Vertical MSP wedge</strong> (solo SMB)</span>
                    <span className="font-mono">€3-7K MRR</span>
                  </li>
                </ul>
              </div>

              <Separator />

              <div>
                <h3 className="text-lg font-semibold mb-4">Why This Wins</h3>
                <div className="space-y-3">
                  {[
                    {
                      title: "Pain is validated, not assumed",
                      desc: "MSP subs repeat the same constraint: first-response SLA impossible without per-client humans. We package retrieval + draft that already exists only in senior heads."
                    },
                    {
                      title: "Channel-led GTM is proven",
                      desc: "Sell to MSPs + IT trade associations (BITKOM, Austrian chambers) serving 40+ SMBs. One MSP LOI = 40 client teams. No paid CAC for the first cohort."
                    },
                    {
                      title: "Sovereignty is a wedge",
                      desc: "US helpdesks can't promise EU-hosted, ticket-in-region. GDPR-bound MSPs pay to white-label a compliant desk they can stand behind."
                    },
                    {
                      title: "Retention via Resolution KB",
                      desc: "Closed tickets compound into a searchable KB; the next identical ticket auto-suggests the fix. Compounding, low-churn."
                    }
                  ].map((item, i) => (
                    <div key={i} className="flex gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <div>
                        <div className="font-medium">{item.title}</div>
                        <div className="text-sm text-muted-foreground">{item.desc}</div>
                      </div>
                    </div>
                  ))
                }
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
              <CardTitle className="text-xl">Per-Seat + MSP White-Label</CardTitle>
              <CardDescription>€29-99/mo — aligned to the support seats it runs, with a white-label tier MSPs resell</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-3">
                {[
                  {
                    name: "Self-Serve",
                    price: "€29/mo",
                    desc: "5 seats, context retrieval, localized DE/IT/EN draft, EU-hosted. Self-setup in 5 minutes. No card to operate.",
                    features: ["Context retriever", "Localized draft", "Smart routing", "GDPR DPA template"],
                    popular: false
                  },
                  {
                    name: "Team",
                    price: "€59/mo",
                    desc: "Up to 25 seats, Resolution KB, email + Drive connectors, priority routing. For growing internal IT teams.",
                    features: ["Up to 25 seats", "Resolution KB", "Tool connectors", "Priority routing"],
                    popular: false
                  },
                  {
                    name: "MSP White-Label",
                    price: "€99/mo",
                    desc: "Unlimited client teams, branded portal + reply footer, bulk routing. The MSP resells it as their support desk.",
                    features: ["White-label portal", "Client teams", "Bulk routing", "Priority support"],
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
                        {plan.popular ? "Start MSP" : "Choose Plan"}
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
              <p className="text-sm text-muted-foreground text-center mt-4">
                M12 conservative estimate: €5K MRR (~€60K ARR) at 40 self-serve seats + 6 MSP (avg 12 client teams). Layered path (association channel → Resolution KB retention) projects €7K MRR.
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
              <CardTitle className="text-xl">Minimal, Sovereign Stack</CardTitle>
              <CardDescription>Self-hostable, EU-region, ticket ingest + LLM retrieval/draft + smart routing</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex flex-wrap gap-2">
                {[
                  "Next.js 14 (App Router)",
                  "Supabase (PostgreSQL + Auth)",
                  "Email/IMAP + EU OAuth connectors",
                  "LLM (Claude/Sonnet) for draft + retrieval",
                  "Vercel / Hetzner (EU regions)",
                  "Tailwind CSS + TypeScript",
                  "Ticket ingest (webhook / email)",
                  "DPA-ready EU hosting"
                ].map((tech) => (
                  <Badge key={tech} variant="outline" className="bg-muted/50">
                    {tech}
                  </Badge>
                ))
              }
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
              <CardTitle className="text-xl">Prove the First Response Before Building White-Label</CardTitle>
              <CardDescription>Validate context retrieval + localized draft before adding MSP portal + Resolution KB</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {[
                {
                  week: "Week 1",
                  title: "Problem Discovery (10 interviews)",
                  desc: "Talk to 5 MSPs / IT leads in DE/AT/IT. Confirm first-response SLA is the bottleneck and they'll pay for localized draft + routing."
                },
                {
                  week: "Week 2",
                  title: "Landing Page + MSP LOIs",
                  desc: "Page: 'Your tickets answer themselves in DE/IT/EN.' Cold DM BITKOM / chamber MSPs. Target: 1 paid pilot + 1 LOI."
                },
                {
                  week: "Week 3",
                  title: "Vertical-Slice MVP",
                  desc: "Ticket in → retrieve past + docs → localized draft + route. Manual-review first 20 tickets. Target: operator says 'saved me 20 minutes.'"
                },
                {
                  week: "Week 4",
                  title: "Pilot + Scope",
                  desc: "Run the slice for 1-2 MSP client teams. Measure first-response time vs manual. Scope white-label + KB on real demand."
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
              ))
            }
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6 mb-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-xl">Dogfooding Plan (Limeon srl)</CardTitle>
              <CardDescription>Validate by dogfooding on Limeon srl first, then clone verticals</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              {[
                "Run the desk on Limeon's own internal IT tickets — measure first-response time vs the founder's manual inbox today",
                "Use the Resolution KB to answer repeat questions (VPN, invoice access) without re-typing",
                "Hand the white-label portal to one Limeon IT-partner MSP as a free pilot",
                "Once proven, clone verticals: tax-advisor MSPs, chamber-listed IT shops, EU hosting resellers"
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
                      <TableHead className="w-[30%]">Zendesk / Freshdesk</TableHead>
                      <TableHead className="w-[30%]">This Idea</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {[
                      ["Context Retrieval", "❌ Cold-start tickets", "✅ Past ticket + doc pull"],
                      ["Localized DE/IT/EN Draft", "❌ English templates", "✅ Native first response"],
                      ["MSP White-Label", "⚠️ Enterprise only", "✅ Built-in"],
                      ["EU-Sovereign Hosting", "❌ US-hosted", "✅ Hetzner EU"],
                      ["Resolution KB", "⚠️ KB add-on", "✅ Auto from closed tickets"],
                      ["SMB Pricing", "⚠️ Per-agent $", "✅ Per-seat €29"]
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
                  risk: "Ticketing is a commodity",
                  mitigation: "The DB is free; the moat is retrieval + localized draft + white-label. Give the inbox away, charge for the first response + client KB."
                },
                {
                  risk: "Zendesk moves down-market",
                  mitigation: "They sell to support orgs, not MSPs serving 40 SMBs. White-label + native DE/IT/EN + no-log EU hosting is the per-country wedge they won't build."
                },
                {
                  risk: "Draft sends the wrong reply",
                  mitigation: "Human-in-the-loop always; the draft is editable, never auto-send. Routing is a suggestion, not an action."
                },
                {
                  risk: "Scope creep into full ITSM",
                  mitigation: "Stay narrow: triage + first response + routing. Full ITSM is a different product. Defend the boring wedge."
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
              ))
            }
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
