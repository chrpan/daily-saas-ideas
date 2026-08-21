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
          <span className="font-medium">Idea #3</span>
        </div>

        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <Badge className="text-base px-4 py-1">Idea #3</Badge>
            <Badge variant="outline" className="text-sm">Team Collaboration</Badge>
          </div>
          <h1 className="text-3xl font-bold tracking-tight mb-2">Remote Team Knowledge Base</h1>
          <p className="text-lg text-muted-foreground">
            A decentralized, AI-powered knowledge base for remote teams with smart search and async-first workflows
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
          {[
            { label: "Category", value: "Team Collaboration" },
            { label: "Target Market", value: "Remote Teams, Startups" },
            { label: "Pricing Model", value: "$20-79/mo per team" },
            { label: "Build Time", value: "8-12 weeks" },
            { label: "Reference", value: "Notion ($10B valuation)" },
            { label: "Compliance", value: "GDPR, SOC-2" }
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
              <CardTitle className="text-xl">Remote Teams Drown in Information Fragmentation</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Remote teams use 5+ tools for knowledge (Slack, Notion, Google Drive, emails, Jira). Information is scattered, stale, and impossible to search across. The core problems:
              </p>
              <div className="space-y-3">
                {[
                  { title: "Search is terrible across tools", desc: "Slack search finds messages from 3 months ago but not the Google Doc that message referenced. Teams waste 20%+ of time searching for information." },
                  { title: "Knowledge decays quickly", desc: "A decision made in Slack 6 months ago is forgotten. Nobody knows why a feature was built or rejected. Institutional memory dies with turnover." },
                  { title: "Async-first info is missing", desc: "New remote hires need context they can consume without scheduling calls. Most knowledge bases require synchronous onboarding." },
                  { title: "No single source of truth", desc: "Engineers look at Jira for project status, PMs look at Notion for specs, sales looks at Salesforce. Nobody has the full picture." }
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
                    Knowledge bases fail because they're passive — people have to remember to update them. The winning tool is active: it captures knowledge automatically from work conversations and makes it searchable in one place, with AI as the interface, not a search box.
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
              <CardTitle className="text-xl">AI-Powered Team Brain</CardTitle>
              <CardDescription>An active knowledge base that automatically captures, organizes, and makes team knowledge searchable — with AI as the primary interface</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {[
                  {
                    icon: <Globe className="h-5 w-5" />,
                    title: "Cross-Tool Auto-Capture",
                    desc: "Connects to Slack, GitHub, Jira, Google Drive, Notion. Automatically indexes discussions, decisions, code changes, and docs — all searchable in one place"
                  },
                  {
                    icon: <Shield className="h-5 w-5" />,
                    title: "AI Answering Interface",
                    desc: "Ask 'When did we decide to build feature X?' — AI finds the relevant Slack thread, Jira ticket, and Google Doc, summarizes the answer with citations"
                  },
                  {
                    icon: <Users className="h-5 w-5" />,
                    title: "Institutional Memory Engine",
                    desc: "Identifies stale/important decisions and prompts owners to update them. Keeps knowledge fresh automatically."
                  },
                  {
                    icon: <DollarSign className="h-5 w-5" />,
                    title: "Onboarding Auto-Generator",
                    desc: "New hire asks 'How do we ship code?' — AI generates a personalized onboarding guide from actual team practices, not docs written for a different time"
                  },
                  {
                    icon: <CheckCircle className="h-5 w-5" />,
                    title: "Decision Log",
                    desc: "Auto-captures key decisions from conversations (RFCs, pull request discussions, standups). Chronological decision log with context, alternatives considered, and outcome"
                  },
                  {
                    icon: <Tag className="h-5 w-5" />,
                    title: "Team Workspace Sync",
                    desc: "Auto-syncs with Notion/Confluence for teams that need structured docs. Import existing content, keep it searchable alongside chat/email"
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
                <div className="text-sm font-medium text-green-800 mb-3">📈 Reference Revenue Data</div>
                <ul className="space-y-2 text-sm">
                  <li className="flex justify-between">
                    <span><strong>Notion</strong> (general docs/wiki)</span>
                    <span className="font-mono">$10B valuation</span>
                  </li>
                  <li className="flex justify-between">
                    <span><strong>Guru</strong> (knowledge management)</span>
                    <span className="font-mono">$45M ARR</span>
                  </li>
                  <li className="flex justify-between">
                    <span><strong>Slab</strong> (knowledge base)</span>
                    <span className="font-mono">$12M ARR</span>
                  </li>
                  <li className="flex justify-between">
                    <span><strong>Thread</strong> (internal wiki)</span>
                    <span className="font-mono">$5M ARR</span>
                  </li>
                  <li className="flex justify-between">
                    <span><strong>Team knowledge tools</strong> (mid-tier)</span>
                    <span className="font-mono">$20K-100K MRR</span>
                  </li>
                </ul>
              </div>

              <Separator />

              <div>
                <h3 className="text-lg font-semibold mb-4">Why This Workstream Wins</h3>
                <div className="space-y-3">
                  {[
                    {
                      title: "Team knowledge is a $5B+ category",
                      desc: "Notion alone serves 30M users. Teams are desperate for better knowledge management"
                    },
                    {
                      title: "Remote work is permanent",
                      desc: "Hybrid/remote is now default for tech companies. Async-first knowledge is no longer optional"
                    },
                    {
                      title: "AI makes it 10x better",
                      desc: "Without AI, a cross-tool knowledge base is just a worse search engine. With AI, it becomes an intelligent assistant"
                    },
                    {
                      title: "Pricing power",
                      desc: "Per-seat pricing at $20-79/mo. 10-person team pays $200-790/mo. Teams will pay to save 5 hours/month per person"
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
              <CardTitle className="text-xl">Per-Team Pricing</CardTitle>
              <CardDescription>$20-79/mo per team (not per-seat) to encourage adoption without seat-counting friction</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-3">
                {[
                  {
                    name: "Small Team",
                    price: "$20/mo",
                    desc: "Up to 10 team members, 2 tool integrations, AI search, basic onboarding guide",
                    features: ["Up to 10 members", "2 tool integrations", "AI search", "Basic onboarding"],
                    popular: false
                  },
                  {
                    name: "Growth Team",
                    price: "$49/mo",
                    desc: "Up to 30 members, unlimited integrations, decision log, stale knowledge alerts, API access",
                    features: ["Up to 30 members", "Unlimited integrations", "Decision log", "Stale alerts", "API access"],
                    popular: true
                  },
                  {
                    name: "Enterprise",
                    price: "$79/mo",
                    desc: "Everything in Growth + SSO, audit logs, custom retention policies, dedicated support, SLA",
                    features: ["SSO", "Audit logs", "Custom retention", "SLA", "Priority support"],
                    popular: false
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
                      <div className="text-3xl font-bold text-center mb-2">{plan.price}</div>
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
                        {plan.popular ? "Start Free Trial" : "Choose Small Team"}
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
              <p className="text-sm text-muted-foreground text-center mt-4">
                14-day free trial, no credit card required. Annual billing saves 20%.
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
              <CardTitle className="text-xl">Integration-Heavy Stack</CardTitle>
              <CardDescription>Modern stack with strong integration capabilities and vector search for AI</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {[
                  "Next.js 14 (App Router)",
                  "Supabase (PostgreSQL + Vector for AI search)",
                  "OpenAI Embeddings + Claude (AI answering)",
                  "Vercel",
                  "Tailwind CSS",
                  "TypeScript",
                  "Slack SDK, GitHub API, Google Drive API",
                  "Zod (validation)"
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
              <CardTitle className="text-xl">Validate Before Building</CardTitle>
              <CardDescription>Go from idea to pre-sales validation in 30 days</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {[
                {
                  week: "Week 1",
                  title: "Problem Discovery (15 interviews)",
                  desc: "Interview remote team leads on RemoteOK, WeWorkRemotely communities, and Indie Hackers. Ask: How do you onboard new hires? What tools do you use for knowledge? How much time is wasted searching?"
                },
                {
                  week: "Week 2",
                  title: "Landing Page Test",
                  desc: "Build page: Your team's brain, in one place. AI answers any question about your team's knowledge. Integrate with Slack, GitHub, Google Drive. Drive 300 visitors via remote work communities + €100 Twitter ads. Target: 5 signups."
                },
                {
                  week: "Week 3",
                  title: "Pre-Sell",
                  desc: "Offer early-bird lifetime deal: $199 lifetime (30 teams). Stripe payment link. Target: 3-5 pre-orders. If <2, the pain isn't strong enough or timing is wrong."
                },
                {
                  week: "Week 4",
                  title: "Scope MVP",
                  desc: "Interview pre-orders. Find the ONE integration and ONE AI feature they need. Scope: Slack integration + AI search answering + basic dashboard. 8-12 week build."
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
              <CardTitle className="text-xl">Dogfooding Plan</CardTitle>
              <CardDescription>Dogfood on own team, then expand via vertical flavors</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              {[
                "Deploy MVP and use it as the team's primary knowledge interface",
                "Connect to Slack, GitHub, and Google Drive first (most-used tools)",
                "Track time saved: how often does AI answer questions that would have required searching 3 tools?",
                "Collect testimonials from team members about onboarding speed improvement",
                "Once proven, create vertical flavors: team-brain-for-startups.com, remote-team-wiki.io"
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
            <CardContent>
              <ScrollArea className="max-h-[400px] overflow-y-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-[40%]">Feature</TableHead>
                      <TableHead className="w-[30%]">Notion / Guru</TableHead>
                      <TableHead className="w-[30%]">This Idea</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {[
                      ["Cross-Tool Search", "No (single tool)", "✅ Slack + GitHub + Drive + more"],
                      ["AI Answering", "No (search box)", "✅ Natural language Q&A with citations"],
                      ["Auto-Capture", "Manual (user adds)", "✅ Automatic from connected tools"],
                      ["Institutional Memory", "Passive (docs rot)", "✅ Active: alerts on stale knowledge"],
                      ["Onboarding AI", "Template-based", "✅ Personalized from actual team practices"],
                      ["Decision Log", "Manual (user writes)", "✅ Auto-captured from conversations"]
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
                  risk: "Integration complexity is high",
                  mitigation: "Start with 1-2 integrations (Slack + GitHub). Expand incrementally. Each integration is a separate effort, stagger them."
                },
                {
                  risk: "Data privacy concerns",
                  mitigation: "EU-hosted option (like the testimonial widget). Explicit DPA. Teams can limit what's indexed."
                },
                {
                  risk: "Notion/Guru add AI features",
                  mitigation: "They're tool-specific. Cross-tool AI answering is a fundamentally different product. Speed matters."
                },
                {
                  risk: "Teams won't change habits",
                  mitigation: "AI answering is so much better than search that adoption is worth the switch. Start with passive auto-capture (no behavior change needed)."
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