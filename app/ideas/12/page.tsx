"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { CheckCircle, XCircle, Tag, Zap, Users, DollarSign, Globe, Shield, ArrowRight, Clock } from "lucide-react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function IdeaDetailPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card sticky top-0 z-10">
        <div className="flex items-center justify-between px-4 py-4">
          <div className="flex items-center gap-2">
            <Link href="/" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
              <ArrowLeft className="h-4 w-4" />
              <span className="text-sm font-medium">Back to Ideas</span>
            </Link>
          </div>
          <span className="text-sm text-muted-foreground">Daily SaaS Ideas Collection</span>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 mb-4 text-sm text-muted-foreground">
          <Link href="/" className="hover:text-foreground transition-colors">Ideas</Link>
          <ArrowRight className="h-3 w-3" />
          <span className="font-medium">Idea #12</span>
        </div>

        {/* Idea Badge and Title */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <Badge className="text-base px-4 py-1">Idea #12</Badge>
            <Badge variant="outline" className="text-sm">Compliance / Audit</Badge>
          </div>
          <h1 className="text-3xl font-bold tracking-tight mb-2">Compliance Evidence Collector for Small Regulated Firms</h1>
          <p className="text-lg text-muted-foreground">
            An autonomous agent that continuously collects, organizes, and refreshes compliance evidence for small regulated firms — replacing the manual scramble before audits with a self-serve, EU-hosted, GDPR-ready tool.
          </p>
        </div>

        {/* Meta Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
          {[
            { label: "Category", value: "Compliance / Audit" },
            { label: "Target Market", value: "EU Small Regulated Firms" },
            { label: "Pricing Model", value: "EUR49-149/mo" },
            { label: "Build Time", value: "4-6 weeks" },
            { label: "Reference", value: "Vanta ($400M), Drata, Sprinto" },
            { label: "Compliance", value: "GDPR, ISO 27001 evidence, sector-specific" }
          ].map((meta, i) => (
            <Card key={i} className="bg-muted/50">
              <CardContent className="p-4">
                <div className="text-xs text-muted-foreground uppercase tracking-wide mb-1">{meta.label}</div>
                <div className="text-sm font-medium">{meta.value}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* The Problem */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <span className="text-destructive">❌</span> The Problem
          </h2>
          <Card>
            <CardHeader>
              <CardTitle className="text-xl">Small Regulated Firms Drown in Audit Prep</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Small regulated firms (healthcare clinics, law offices, financial advisors, energy consultants) face the same compliance evidence demands as enterprises — but without the dedicated compliance team. When an audit is announced, they scramble:
              </p>
              <div className="space-y-3">
                {[
                  { title: "Manual evidence collection", desc: "Policies, access logs, training records, vendor certificates scattered across Google Drive, email, ticketing systems — someone spends days chasing them down" },
                  { title: "Evidence goes stale between audits", desc: "A policy signed 18 months ago, a risk assessment from last year, an employee who left — evidence decays and the audit reveals gaps" },
                  { title: "No continuous compliance posture", desc: "Firms only think about evidence when an auditor asks — not as a continuous, automated process. Surprise findings and remediation costs follow" },
                  { title: "US tools don't fit EU/GDPR context", desc: "Vanta, Drata, Sprinto are built for US SOC 2 / enterprise scale. A 10-person Italian medical practice or Austrian law firm can't justify the price or the US data handling" }
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

          {/* Insight Highlight */}
          <Card className="bg-gradient-to-r from-primary to-secondary text-primary-foreground mt-4">
            <CardContent className="p-6">
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 rounded-full bg-white/20 p-2">
                  <Zap className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2 text-primary-foreground">💡 The Insight</h3>
                  <p className="text-sm text-primary-foreground/80">
                    The pain isn't evidence itself — it's the <em>continuous collection and organization</em> of evidence. Firms that treat compliance as a once-a-year scramble lose. The winner collects evidence proactively, every day, in a form the auditor can consume directly. For EU small firms, that means EU-hosted, GDPR-native, sector-specific.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* The Solution */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <span className="text-green-500">✅</span> The Solution
          </h2>
          <Card>
            <CardHeader>
              <CardTitle className="text-xl">Compliance Evidence Collector</CardTitle>
              <CardDescription>A self-serve agent that continuously collects, validates, and organizes compliance evidence for small regulated EU firms — so audit prep becomes a formality, not a scramble</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {[
                  {
                    icon: <Globe className="h-5 w-5" />,
                    title: "EU-First, GDPR-Native",
                    desc: "Data hosted in Frankfurt/Milan. GDPR Article 28 DPA included. Evidence collected and stored within EU — no US transfers, Schrems II compliant"
                  },
                  {
                    icon: <Shield className="h-5 w-5" />,
                    title: "Continuous Evidence Collection",
                    desc: "Agent continuously pulls from connected sources: Google Workspace / Microsoft 365 (policies, training records), access logs, ticketing systems, vendor portals — evidence stays fresh"
                  },
                  {
                    icon: <Tag className="h-5 w-5" />,
                    title: "Sector-Specific Evidence Templates",
                    desc: "Pre-built evidence checklists for healthcare (GDPR health data, national eHealth mandates), legal (client confidentiality, conflict checks), financial advice (MiFID II, national regulatory evidence), energy consulting (contractual compliance, vendor certs)"
                  },
                  {
                    icon: <Users className="h-5 w-5" />,
                    title: "Evidence Freshness Monitoring",
                    desc: "Agent flags stale or missing evidence: expired policies, missing training records, departed employees without offboarding evidence, vendor certificates nearing expiry — with plain-English action items"
                  },
                  {
                    icon: <DollarSign className="h-5 w-5" />,
                    title: "Auditor-Ready Export",
                    desc: "One-click export of evidence package in the format the auditor expects: organized evidence index, linked documents, freshness status, gap report. Saves days of audit-prep labor"
                  },
                  {
                    icon: <CheckCircle className="h-5 w-5" />,
                    title: "Self-Serve Onboarding",
                    desc: "Connect your evidence sources via OAuth (Google, Microsoft, Jira, GitHub) — agent starts collecting immediately. No compliance consultant required to set up. Guided setup in 15 minutes"
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

        {/* Market Validation */}
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
                    <span><strong>Vanta</strong> (compliance automation)</span>
                    <span className="font-mono">$400M+ valuation, $50M+ ARR</span>
                  </li>
                  <li className="flex justify-between">
                    <span><strong>Drata</strong> (continuous compliance)</span>
                    <span className="font-mono">$100M+ ARR</span>
                  </li>
                  <li className="flex justify-between">
                    <span><strong>Sprinto</strong> (agentic compliance)</span>
                    <span className="font-mono">$15M+ ARR</span>
                  </li>
                  <li className="flex justify-between">
                    <span><strong>Micro-SaaS average</strong> (64% margin)</span>
                    <span className="font-mono">$1,735 MRR</span>
                  </li>
                  <li className="flex justify-between">
                    <span><strong>Niche compliance players</strong> (small firm tier)</span>
                    <span className="font-mono">$5-15K MRR</span>
                  </li>
                </ul>
              </div>

              <Separator />

              <div>
                <h3 className="text-lg font-semibold mb-4">Why This Niche Wins</h3>
                <div className="space-y-3">
                  {[
                    {
                      title: "Huge underserved market",
                      desc: "Hundreds of thousands of EU small regulated firms — clinics, law offices, financial advisors, energy consultants — each facing compliance evidence demands but priced out of Vanta/Drata ($5K+/yr enterprise minimums)"
                    },
                    {
                      title: "Audit pain is recurring and expensive",
                      desc: "Every audit cycle (annual or biannual) costs the firm days of staff time + consultant fees. Evidence gaps mean failed audits, remediation, and reputational risk. Firms pay to avoid this"
                    },
                    {
                      title: "US tools mismatch EU/GDPR context",
                      desc: "Vanta, Drata built for US SOC 2 / enterprise. EU small firms need: EU data residency, GDPR-native evidence, sector-specific templates (health, legal, finance, energy), affordable pricing (€49-149/mo)"
                    },
                    {
                      title: "Distribution via trusted channels",
                      desc: "Compliance consultants, Steuerberater, trade associations, sector chambers — firms trust their existing advisors. Sell through them, not direct cold outreach"
                    },
                    {
                      title: "Regulatory tailwind",
                      desc: "EU compliance enforcement increasing across sectors — DORA (financial), NIS2 (critical infrastructure), MDR (medical devices), national health data regulations. Small firms caught in the middle need tooling"
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

        {/* Pricing */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <span className="text-purple-500">💰</span> Pricing Strategy
          </h2>
          <Card>
            <CardHeader>
              <CardTitle className="text-xl">Tiered Pricing</CardTitle>
              <CardDescription>€49-149/mo tiered pricing targeting small regulated firms and compliance consultants reselling to them</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-3">
                {[
                  {
                    name: "Starter",
                    price: "€49/mo",
                    desc: "Up to 5 evidence sources, 1 sector template, continuous collection, freshness alerts, auditor-ready export, EU hosting, GDPR DPA",
                    features: ["5 evidence sources", "1 sector template", "Continuous collection", "Freshness alerts", "Auditor-ready export", "EU hosting + GDPR DPA"],
                    popular: false
                  },
                  {
                    name: "Professional",
                    price: "€99/mo",
                    desc: "Unlimited evidence sources, 3 sector templates, advanced freshness rules, gap reports, consultant dashboard (view-only for external auditors), priority support",
                    features: ["Unlimited evidence sources", "3 sector templates", "Advanced freshness rules", "Gap reports", "Auditor view-only access", "Priority support"],
                    popular: true
                  },
                  {
                    name: "Consultant / Multi-Client",
                    price: "€149/mo",
                    desc: "Everything in Pro + manage up to 5 client firms, client-specific evidence workspaces, white-label reports, API access, compliance consultant dashboard",
                    features: ["5 client firms", "Client workspaces", "White-label reports", "API access", "Consultant dashboard", "Dedicated onboarding"],
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
                        {plan.popular ? "Start Pro Trial" : "Choose Starter"}
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

        {/* Tech Stack */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <span className="text-gray-500">⚡</span> Tech Stack
          </h2>
          <Card>
            <CardHeader>
              <CardTitle className="text-xl">Modern, Minimal Stack</CardTitle>
              <CardDescription>Modern, minimal stack for fast iteration and EU compliance</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {[
                  "Next.js 14 (App Router)",
                  "Supabase (PostgreSQL + Auth + Storage)",
                  "Stripe (Billing + VAT)",
                  "Vercel (EU regions: FRA1, MIL1)",
                  "Tailwind CSS",
                  "TypeScript",
                  "Google Workspace API / Microsoft Graph API",
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

        {/* 4-Week Validation Plan */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <span className="text-orange-500">📅</span> 4-Week Validation Sprint
          </h2>
          <Card>
            <CardHeader>
              <CardTitle className="text-xl">Go from Idea to Validated Pre-Sales in 30 Days</CardTitle>
              <CardDescription>Go from idea to validated pre-sales in 30 days — before writing any code</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {[
                {
                  week: "Week 1",
                  title: "Problem Discovery (10 interviews)",
                  desc: "Join 3 niche communities: healthcare (Italian AMO chapters, German Hausarzt forums), legal (Anwaltsforen, Italian Ordini degli Avvocati local sections), financial advice (BaFin-adjacent LinkedIn groups). Run 10 interviews asking about their last audit: what evidence did they scramble for, how long did it take, what did it cost."
                },
                {
                  week: "Week 2",
                  title: "Landing Page Test",
                  desc: "Build simple page with value prop: Continuous compliance evidence for EU small regulated firms — EU-hosted, GDPR-native, auditor-ready. Drive 300 targeted visitors via cold DMs to compliance consultants + €100 LinkedIn ads targeting clinic managers / law firm partners / financial advisors in IT/DE/AT. Target: 3-5% email signup."
                },
                {
                  week: "Week 3",
                  title: "Pre-Sell",
                  desc: "Email signups a founder's deal: €49/mo → €29/mo lifetime (first 20 firms). Stripe payment link with real payment. Target: 5-10 pre-payments before building. If <5, pivot or kill."
                },
                {
                  week: "Week 4",
                  title: "Scope MVP",
                  desc: "Interview pre-payers. Find the ONE evidence source they need most (probably Google Workspace + access logs). Scope a 4-6 week build: Auth → Source connector → Evidence collection → Freshness monitoring → Auditor export → Stripe billing → EU hosting config. Nothing more."
                }
              ].map((step) => (
                <div key={step.week} className="flex gap-4">
                  <div className="flex-shink-0 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-lg font-bold">
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

        {/* Dogfooding & Risks */}
        <div className="space-y-6 mb-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-xl">Dogfooding Plan (Limeon srl)</CardTitle>
              <CardDescription>Validate by dogfooding on Limeon srl first, then clone verticals</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              {[
                "Deploy MVP on compliance.limeon.eu (EU-hosted)",
                "Connect Limeon's own evidence sources: Google Workspace policies, access logs, training records",
                "Build Limeon's auditor-ready evidence package for its next compliance review",
                "Validate freshness monitoring: flag expired policies, missing training, departed staff evidence gaps",
                "Sell to 2-3 energy consulting peers via Limeon's network, clone as vertical flavor",
                "Once proven, create vertical flavors: compliance-for-clinics.it, compliance-for-anwälte.de, compliance-for-beratung.at"
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
                      <TableHead className="w-[30%]">Vanta / Drata</TableHead>
                      <TableHead className="w-[30%]">This Idea</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {[
                      ["EU Data Hosting", "❌ US only, enterprise tier", "✅ FRA/MIL, all tiers"],
                      ["GDPR-Native Evidence", "❌ US compliance frameworks first", "✅ EU compliance first"],
                      ["Small Firm Pricing", "❌ $5K+/yr minimum", "✅ €49/mo starter"],
                      ["Sector Templates (health/legal/finance)", "❌ Generic SOC 2 / ISO 27001", "✅ Pre-built sector checklists"],
                      ["Self-Serve Onboarding", "❌ Heavy implementation", "✅ 15-min guided setup"],
                      ["Consultant Multi-Client", "❌ Enterprise only", "✅ Built-in multi-client tier"]
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
                  risk: "Vanta/Drata add EU small-firm tier",
                  mitigation: "They're enterprise-focused, US-centered, 50-200 person teams. EU small-firm compliance with sector templates + €49 pricing + self-serve is a different product, not a feature. Speed to market matters"
                },
                {
                  risk: "Small firm price sensitivity",
                  mitigation: "€49/mo starter. Lifetime deal for first 50 firms builds tribe. Value = one avoided failed audit. Compliance is non-discretionary spend for regulated firms"
                },
                {
                  risk: "Evidence collection is complex across sources",
                  mitigation: "Start with 2-3 sources (Google Workspace, Microsoft 365, access logs) — the highest-value evidence. Expand via community templates post-MVP. Don't boil the ocean"
                },
                {
                  risk: "Liability if evidence is incomplete",
                  mitigation: "Tool provides evidence collection + freshness alerts, not legal guarantee. Clear disclaimers. Firms still responsible for compliance — tool organizes evidence, doesn't certify it"
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
      </div>
    </div>
  );
}
