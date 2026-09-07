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
          <span className="font-medium">Idea #11</span>
        </div>

        {/* Idea Badge and Title */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <Badge className="text-base px-4 py-1">Idea #11</Badge>
            <Badge variant="outline" className="text-sm">AI / Finance Ops</Badge>
          </div>
          <h1 className="text-3xl font-bold tracking-tight mb-2">EU Receipt Intake & Reimbursement Agent for Small Teams</h1>
          <p className="text-lg text-muted-foreground">
            An agent that sits between employees submitting receipts and the accounting firm, enforcing EU VAT-receipt completeness rules and producing clean reimbursement batches
          </p>
        </div>

        {/* Meta Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
          {[
            { label: "Category", value: "AI / Finance Ops" },
            { label: "Target Market", value: "EU small/mid teams, accountants" },
            { label: "Pricing Model", value: "EUR29-79/mo + EUR5/employee" },
            { label: "Build Time", value: "4-6 weeks" },
            { label: "Reference", value: "Expensify ($650M), Receipt Bank" },
            { label: "Compliance", value: "VAT receipts DE/IT/AT, GDPR" }
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
              <CardTitle className="text-xl">Garbage In, Cleanup Out — The Expense Receipt Tax</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                EU small and mid teams lose hours every month to messy expense submissions — missing VAT fields, wrong categories, photos instead of proper invoices, receipts from outside the approval policy. The cleanup falls on accountants and office managers, and it's called "one of the most frustrating tasks in all of accounting."
              </p>
              <div className="space-y-3">
                {[
                  { title: "Incomplete EU VAT receipts", desc: "DE/IT/AT require mandatory fields (VAT ID, net/gross, date, supplier) — employees submit photos missing half of them" },
                  { title: "Policy violations slip through", desc: "No automatic check that a submission is within per-company category rules or approval thresholds before it hits the bookkeeper" },
                  { title: "Manual cleanup is recurring", desc: "Every reimbursement cycle the accountant fixes the same mistakes — it's not a one-time training problem, it's a structural intake problem" },
                  { title: "Export friction with accounting tools", desc: "Clean batches that drop straight into the bookkeeper's workflow are rare; most tools produce dumps the accountant has to re-format" }
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
                    Expense tools already exist — Expensify, Receipt Bank, etc. The gap is the <em>intake-layer agent</em> that catches garbage before it reaches the accountant, enforces EU VAT-receipt completeness, and produces a clean reimbursement batch. The paid differentiator is the intake agent + EU-compliance framing + accountant-ready export, not a free receipt snap.
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
              <CardTitle className="text-xl">Receipt Intake Agent with EU Policy Enforcement</CardTitle>
              <CardDescription>An agent that captures mobile receipts, validates them against company policy, enforces EU VAT-receipt completeness, and produces a clean reimbursement batch + accountant-ready export</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {[
                  {
                    icon: <Globe className="h-5 w-5" />,
                    title: "EU VAT Receipt Completeness",
                    desc: "Enforces DE/IT/AT mandatory receipt fields (VAT ID, net/gross, date, supplier) — rejects incomplete submissions before they reach the bookkeeper"
                  },
                  {
                    icon: <Shield className="h-5 w-5" />,
                    title: "Per-Company Policy Enforcement",
                    desc: "Configurable category rules, approval thresholds, missing-field checks — each company sets its own policy, the agent enforces it at intake"
                  },
                  {
                    icon: <Tag className="h-5 w-5" />,
                    title: "Mobile Receipt Capture",
                    desc: "Employee captures photo/invoice via mobile — agent extracts fields, validates completeness, categorizes, and flags policy exceptions automatically"
                  },
                  {
                    icon: <Users className="h-5 w-5" />,
                    title: "Accountant-Ready Export",
                    desc: "Clean reimbursement batch + tidy export that drops straight into the bookkeeper's workflow — one concrete job: stop garbage submissions and the hourly cleanup they cause"
                  },
                  {
                    icon: <DollarSign className="h-5 w-5" />,
                    title: "Sold via Accountant Network",
                    desc: "Distributed through Steuerberater/commercialista/accountant referral network rather than direct outreach — the accountant recommends it to their SME clients"
                  },
                  {
                    icon: <CheckCircle className="h-5 w-5" />,
                    title: "EU-Hosted, GDPR",
                    desc: "Data hosted in EU (Frankfurt/Milan), GDPR Article 28 DPA included, Schrems II compliant — EU SME and accountant buyers expect it"
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
                    <span><strong>Expensify</strong> (expense reporting)</span>
                    <span className="font-mono">$650M valuation</span>
                  </li>
                  <li className="flex justify-between">
                    <span><strong>Receipt Bank / Dext</strong></span>
                    <span className="font-mono">£150M+ valuation</span>
                  </li>
                  <li className="flex justify-between">
                    <span><strong>Mid-market expense SaaS</strong></span>
                    <span className="font-mono">$5-20K MRR</span>
                  </li>
                  <li className="flex justify-between">
                    <span><strong>Micro-SaaS average</strong> (64% margin)</span>
                    <span className="font-mono">$1,735 MRR</span>
                  </li>
                </ul>
              </div>

              <Separator />

              <div>
                <h3 className="text-lg font-semibold mb-4">Why This Niche Wins</h3>
                <div className="space-y-3">
                  {[
                    {
                      title: "Structural pain, not a one-off",
                      desc: "Expense cleanup happens every reimbursement cycle — it's recurring and boring, exactly the job an agent can own"
                    },
                    {
                      title: "Accountant referral channel",
                      desc: "Steuerberater/commercialista recommend tools to SME clients — warm distribution, no cold outreach needed"
                    },
                    {
                      title: "EU compliance as moat",
                      desc: "DE/IT/AT VAT receipt rules are mandatory and specific — a generic US expense tool can't enforce them; this is a compliance product, not a feature"
                    },
                    {
                      title: "Underserved SME segment",
                      desc: "Expensify/Dext target mid-market; sub-50-person EU teams and their accountants are a gap — simpler, cheaper, EU-native"
                    },
                    {
                      title: "Demand signal",
                      desc: "r/Accounting thread (2026-09-06): expense reporting called 'one of the most frustrating tasks in all of accounting'; AI in accounting is adding work rather than improving CX today — an intake agent that fixes upstream garbage is the missing piece"
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
              <CardTitle className="text-xl">Per-Employee + Base SaaS</CardTitle>
              <CardDescription>EUR29-79/mo base + EUR5/employee — predictable for SMEs, scales with team size, accountant-negotiable</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-3">
                {[
                  {
                    name: "Starter",
                    price: "EUR29/mo + EUR5/emp",
                    desc: "Up to 10 employees, mobile receipt capture, EU VAT completeness check, basic policy rules, accountant export (CSV/XML)",
                    features: ["Mobile receipt capture", "EU VAT completeness", "Basic policy rules", "Accountant export", "EU hosting", "GDPR DPA"],
                    popular: false
                  },
                  {
                    name: "Professional",
                    price: "EUR49/mo + EUR5/emp",
                    desc: "Unlimited employees, full policy engine (categories, thresholds, approval flow), multi-language (DE/IT/AT), accountant-ready export with workbook integration",
                    features: ["Unlimited employees", "Full policy engine", "DE/IT/AT localization", "Accountant workbook export", "Priority support", "Custom branding"],
                    popular: true
                  },
                  {
                    name: "Accountant Tier",
                    price: "EUR79/mo + EUR5/emp",
                    desc: "Everything in Pro + multi-client dashboard, bulk export across clients, accountant referral dashboard (track who recommended), white-label for accounting firms",
                    features: ["Multi-client dashboard", "Bulk cross-client export", "Referral tracking", "White-label for firms", "SLA", "API access"],
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
                14-day free trial, no credit card required. Annual billing saves 20%. Accountant partners get a 20% referral cut on referred clients.
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
              <CardTitle className="text-xl">Minimal Stack, EU-Hosted</CardTitle>
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
                  "Tesseract / OCR for receipt extraction",
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
                  title: "Problem Discovery (10 accountant interviews)",
                  desc: "Reach out to 10 Steuerberater/commercialista/accountants in DE/IT/AT via existing networks. Ask about the worst expense-submission horror stories, current cleanup workflow, and whether they'd recommend a tool that enforces receipt completeness at intake."
                },
                {
                  week: "Week 2",
                  title: "Landing Page + Accountant Referral Test",
                  desc: "Simple page targeting accountants: 'Stop garbage expense submissions before they reach your desk. EU VAT-compliant receipt intake for your SME clients.' Drive 50 targeted visitors via accountant Slack groups + LinkedIn. Target: 5 accountant signups for a demo."
                },
                {
                  week: "Week 3",
                  title: "Pre-Sell to Accountants",
                  desc: "Offer accountant partners a 20% referral cut on clients they onboard. Offer their SME clients a EUR49/mo Pro tier with a 14-day trial. Target: 3 accountant-signed referral agreements + 5 SME pre-payments before building."
                },
                {
                  week: "Week 4",
                  title: "Scope MVP",
                  desc: "Interview pre-paying SMEs + signing accountants. Find the ONE intake validation rule they must have. Scope a 4-6 week build: receipt capture → OCR extraction → EU VAT completeness check → policy validation → accountant export. Nothing more."
                }
              ].map((step) => (
                <div key={step.week} className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-lg font-bold">
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
                "Deploy MVP on expense.limeon.eu (EU-hosted)",
                "Process Limeon's own receipt submissions — test EU VAT completeness enforcement on real Italian invoices",
                "Test per-company policy rules: category rules, approval thresholds, missing-field checks",
                "Validate accountant-ready export: clean batch that drops into a real bookkeeper's workflow",
                "Once proven, create vertical flavors: expense-intake-de (for German Steuerberater), expense-intake-it (for commercialista), expense-intake-at (for Austrian accountants)",
                "Distribute via accountant referral network — the accountant recommends it to their SME clients"
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
                      <TableHead className="w-[30%]">Expensify / Dext</TableHead>
                      <TableHead className="w-[30%]">This Idea</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {[
                      ["EU VAT Receipt Completeness", "❌ Partial / manual", "✅ Enforced at intake"],
                      ["Per-Company Policy Engine", "❌ Basic / paid tier", "✅ Core feature"],
                      ["Accountant Referral Channel", "❌ Direct sales", "✅ Accountant-distributed"],
                      ["Accountant-Ready Export", "❌ Dump / re-format", "✅ Clean batch, workbook-ready"],
                      ["DE/IT/AT Localization", "❌ English-primary", "✅ Native"],
                      ["SME Sub-50 Focus", "❌ Mid-market", "✅ SME wedge"]
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
                  risk: "Expense tools are crowded",
                  mitigation: "The wedge is the intake-layer agent + EU compliance + accountant distribution, not a general expense tool. Differentiate from Expensify/Dext on the policy enforcement + accountant-ready export, not on receipt capture (which they already do)"
                },
                {
                  risk: "OCR accuracy on messy receipts",
                  mitigation: "Start with structured invoices (PDF/email receipts) where OCR is reliable; add photo capture post-MVP as a premium feature. The compliance check works on extracted fields, not on raw image quality"
                },
                {
                  risk: "Accountant referral adoption is slow",
                  mitigation: "Offer a 20% referral cut + free Pro tier for the accountant's own firm — make it financially attractive to recommend. Target 3 signing accountants in the pre-sell window; if none sign, the channel is the problem, pivot to SME direct"
                },
                {
                  risk: "EU VAT rules vary by country",
                  mitigation: "Start with one country (Italy, where Limeon srl is based) — enforce FatturaPA receipt completeness rules. Expand to DE/AT post-MVP as separate vertical flavors, not a messy country-switching UI"
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

        {/* Footer */}
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
