"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { CheckCircle, XCircle, Tag, Zap, Users, DollarSign, Globe, Shield, ArrowRight, Clock, Receipt, FileCheck, Truck } from "lucide-react";
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
          <span className="font-medium">Idea #13</span>
        </div>

        {/* Idea Badge and Title */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <Badge className="text-base px-4 py-1">Idea #13</Badge>
            <Badge variant="outline" className="text-sm">AI / Finance Ops</Badge>
          </div>
          <h1 className="text-3xl font-bold tracking-tight mb-2">Expense Intake & Clean-Reimbursement Agent for EU Small Teams</h1>
          <p className="text-lg text-muted-foreground">
            An agent that sits between employees submitting expenses and the accounting firm: captures mobile receipt photos and PDF invoices, validates them against a per-company policy, enforces EU VAT-receipt completeness rules (DE/IT/AT mandatory fields), and produces a clean reimbursement batch plus a tidy export that drops straight into the bookkeeper's workflow.
          </p>
        </div>

        {/* Meta Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
          {[
            { label: "Category", value: "AI / Finance Ops" },
            { label: "Target Market", value: "EU small/mid teams, accountants" },
            { label: "Pricing Model", value: "EUR29-79/mo + EUR5/employee" },
            { label: "Build Time", value: "4-6 weeks" },
            { label: "Reference", value: "Dext + Expensify (US-first)" },
            { label: "Compliance", value: "GDPR, DE/IT/AT VAT receipt rules" }
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
              <CardTitle className="text-xl">EU Small Teams Drown in Receipt Chaos</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Small EU teams (10-50 people) lose hours every month to expense chaos. Existing tools like Dext ($50M+ ARR) and Expensify ($200M+ ARR) are US-first and don't handle the messy reality of EU SME finance:
              </p>
              <div className="space-y-3">
                {[
                  { title: "Receipts arrive in every form factor", desc: "Crumpled gas-station receipts, PDF invoices from German suppliers, photos from Italian business dinners, email attachments from Austrian vendors — all land in Slack, email, WhatsApp, or a shoebox" },
                  { title: "Per-company policy is enforced manually", desc: "The office manager or junior accountant eyeballs each submission against an informal rule sheet — 'is this dinner client-facing or team lunch?', 'does this taxi receipt have the meter number?' — and rejects the messy ones with a WhatsApp message" },
                  { title: "EU VAT-receipt completeness rules differ by country", desc: "Germany requires Rechnungsnummer, Steuernummer, net/Gross breakdown; Italy requires Partita IVA, data emissione, operazione di acquisto; Austria requires UID-Nr., Glättungsbetrag handling — missing one field means the bookkeeper has to chase it" },
                  { title: "Clean export for the accountant is a manual task", desc: "By the time the monthly bookkeeping batch reaches the Steuerberater/commercialista, someone has spent 3-5 hours reformatting, categorizing, and flagging receipts that don't match policy" }
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
                    The bottleneck isn't capturing receipts — it's <em>policy enforcement at intake time</em>. If the agent rejects a non-compliant receipt the moment it arrives (with a plain-language reason in DE/IT/EN), the bookkeeper never sees it. The winner here isn't a better receipt scanner — it's a policy gate that produces accountant-ready batches by default.
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
              <CardTitle className="text-xl">A Policy-Enforcing Expense Agent for EU Teams</CardTitle>
              <CardDescription>An agent that captures receipts in any form factor, validates them against a per-company policy at intake, enforces EU VAT completeness rules, and produces a clean reimbursement batch + tidy export for the bookkeeper</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {[
                  {
                    icon: <Receipt className="h-5 w-5" />,
                    title: "Multi-Format Intake",
                    desc: "Mobile photo, PDF upload, email-forward, Slack/WhatsApp attachment — one intake surface. OCR + layout-aware extraction handles crumpled receipts and multi-page invoices"
                  },
                  {
                    icon: <FileCheck className="h-5 w-5" />,
                    title: "Per-Company Policy Engine",
                    desc: "Define rules once: category thresholds (client dinner vs team lunch), required fields per expense type, approval chain by amount. Agent flags violations at intake with plain-language reasons"
                  },
                  {
                    icon: <Globe className="h-5 w-5" />,
                    title: "EU VAT Completeness Enforcement",
                    desc: "Country-specific mandatory-field checks: DE (Rechnungsnummer, Steuernummer, net/Gross), IT (Partita IVA, data emissione, operazione di acquisto), AT (UID-Nr., Glättungsbetrag). Missing field = intake rejection with exact reason"
                  },
                  {
                    icon: <Shield className="h-5 w-5" />,
                    title: "Clean Export for the Bookkeeper",
                    desc: "One-click export: categorized, policy-cleared, VAT-complete batch in the format the Steuerberater/commercialista expects. Drops straight into their workflow — no reformatting"
                  },
                  {
                    icon: <Users className="h-5 w-5" />,
                    title: "Employee-Facing Self-Service",
                    desc: "Employees submit via mobile link, get instant pass/fail with reason, resubmit corrected version. No bookkeeping conversation needed for routine submissions"
                  },
                  {
                    icon: <Truck className="h-5 w-5" />,
                    title: "Accountant-Referred Distribution",
                    desc: "Sold via Steuerberater/commercialista/accountant referral: the accountant recommends it to their SME clients because it hands them cleaner batches. B2B2B, no direct outreach"
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
                    <span><strong>Dext</strong> (receipt/invoice capture, US-first)</span>
                    <span className="font-mono">$50M+ ARR</span>
                  </li>
                  <li className="flex justify-between">
                    <span><strong>Expensify</strong> (expense management, US-first)</span>
                    <span className="font-mono">$200M+ ARR</span>
                  </li>
                  <li className="flex justify-between">
                    <span><strong>Skilldoc / local EU players</strong> (niche accountants tools)</span>
                    <span className="font-mono">$1-5M ARR</span>
                  </li>
                  <li className="flex justify-between">
                    <span><strong>Micro-SaaS average</strong> (64% margin)</span>
                    <span className="font-mono">$1,735 MRR</span>
                  </li>
                  <li className="flex justify-between">
                    <span><strong>Median profitable product</strong></span>
                    <span className="font-mono">$4.2K MRR</span>
                  </li>
                </ul>
              </div>

              <Separator />

              <div>
                <h3 className="text-lg font-semibold mb-4">Why This Niche Wins</h3>
                <div className="space-y-3">
                  {[
                    {
                      title: "EU regulatory tailwind",
                      desc: "EU VAT invoice requirements are getting stricter, not looser. Digital reporting obligations (DFV in DE, FatturaPA in IT, Kurzmitteilung in AT) are pushing SMEs toward structured receipt handling — the compliance angle is a door opener with accountants"
                    },
                    {
                      title: "Underserved distribution channel",
                      desc: "Steuerberater/commercialista/accountant networks are dense in DE/IT/AT. One referral from a trusted accountant gets you 10-50 SME clients with zero cold outreach. The accountant wants cleaner batches — this is their pain too"
                    },
                    {
                      title: "High willingness to pay",
                      desc: "A small team spending 3-5 hours/month on receipt cleanup at €25-40/hour = €900-2400/year in wasted time. EUR29-79/mo is trivial against that. Accountants recommending it to multiple clients amortizes their own onboarding"
                    },
                    {
                      title: "Policy moat",
                      desc: "Once a company's policy rules, approval chains, and export format are configured, switching is painful. The agent learns the company's patterns over time (which vendors are always OK, which receipts always get rejected) — that institutional knowledge is sticky"
                    },
                    {
                      title: "Low competition in the accountant-referred lane",
                      desc: "Dext and Expensify sell direct to SMEs. The accountant-referred B2B2B lane is empty for a EU-policy-aware tool — accountants don't recommend US-first tools that don't handle DE/IT/AT VAT rules"
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
              <CardDescription>EUR29-79/mo tiered pricing plus per-employee fee, targeting different segments of the EU small-team market via accountant referral</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-3">
                {[
                  {
                    name: "Starter",
                    price: "EUR29/mo",
                    desc: "Up to 10 employees, 50 receipts/mo, basic policy engine (3 rules), country VAT checks (1 country), email export",
                    features: ["10 employees", "50 receipts/mo", "3 policy rules", "1 country VAT", "Email export", "Email support"],
                    popular: false
                  },
                  {
                    name: "Professional",
                    price: "EUR49/mo",
                    desc: "Up to 30 employees, unlimited receipts, full policy engine, multi-country VAT checks (DE/IT/AT), accountant-ready batch export, Slack/WhatsApp intake",
                    features: ["30 employees", "Unlimited receipts", "Full policy engine", "DE/IT/AT VAT", "Batch export", "Slack + WhatsApp intake", "Priority support"],
                    popular: true
                  },
                  {
                    name: "Agency/Accountant",
                    price: "EUR79/mo",
                    desc: "Everything in Pro + manage multiple client companies from one dashboard, per-client branding, white-label export, accountant reporting dashboard",
                    features: ["Unlimited client companies", "Per-client branding", "White-label export", "Accountant dashboard", "API access", "SLA", "Remove branding"],
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
                14-day free trial, no credit card required. + EUR5/employee on all plans. Annual billing saves 20%.
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
                  "Tesseract / AWS Textract (OCR)",
                  "Tailwind CSS",
                  "TypeScript",
                  "Zod (policy validation)",
                  "React Email (localized nudge templates)",
                  "PDF.js (invoice parsing)"
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
                  title: "Accountant Interviews (10 conversations)",
                  desc: "Reach out to 10 Steuerberater/commercialista/accountants in DE/IT/AT via existing networks, LinkedIn, and local chamber events. Ask: 'How much time do your SME clients waste on receipt cleanup before you can do the books? What would a clean-batch tool need to do to be worth recommending to your clients?'"
                },
                {
                  week: "Week 2",
                  title: "Policy-Engine Mockup + Landing Page",
                  desc: "Build a simple landing page showing the policy engine in action: a receipt arrives, the agent validates it against a sample company policy, shows pass/fail with reason. Drive 200 visitors via accountant intros + €100 LinkedIn/Google ads targeting SME owners and accountants in DE/IT/AT. Target: 5-10% signup."
                },
                {
                  week: "Week 3",
                  title: "Pre-Sell to Accountants",
                  desc: "Email signups: offer accountants a lifetime 40% discount for referring 5+ SME clients. Offer SME owners EUR29/mo → EUR19/mo lifetime (first 20). Stripe payment link with real payment. Target: 5-10 paying commitments before building. If <5, pivot or kill."
                },
                {
                  week: "Week 4",
                  title: "Scope MVP",
                  desc: "Interview pre-payers. Find the ONE policy rule and ONE VAT country they need first. Scope a 4-6 week build: intake (mobile + email forward) → OCR + extraction → Zod policy validation → country VAT completeness check → clean export CSV. Nothing more."
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
                "Configure Limeon's actual expense policy: client meal vs team lunch, travel class limits, missing-field rules",
                "Set up DE/IT/AT VAT completeness checks for the countries Limeon invoices in",
                "Feed 50 real receipts from Limeon's last 3 months through the agent — measure pass/fail rate and false rejections",
                "Hand the clean export to Limeon's bookkeeper and measure time-to-books vs manual process",
                "Once proven, create vertical flavors: expense-for-handwerker.de, expense-for-partita-iva.it, expense-for-gemeinschaftsunternehmen.at"
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
                      <TableHead className="w-[35%]">Feature</TableHead>
                      <TableHead className="w-[30%]">Dext / Expensify</TableHead>
                      <TableHead className="w-[35%]">This Idea</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {[
                      ["EU VAT completeness (DE/IT/AT)", "❌ Partial / manual", "✅ Country-specific mandatory-field checks at intake"],
                      ["Per-company policy engine", "❌ Generic categorization only", "✅ Custom rules: thresholds, required fields, approval chains"],
                      ["Accountant-referred distribution", "❌ Direct-to-SME only", "✅ B2B2B via Steuerberater/commercialista"],
                      ["Intake rejection with plain-language reason", "❌ Email-only nudges", "✅ Instant pass/fail in DE/IT/EN at intake time"],
                      ["Accountant-ready batch export", "❌ CSV cleanup needed", "✅ Drop-in export matching bookkeeper workflow"],
                      ["EU data residency", "❌ US-only / US-first", "✅ FRA/MIL hosting, GDPR DPA auto-included"]
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
                  risk: "OCR accuracy on crumpled/non-standard receipts",
                  mitigation: "Start with clear/PDF receipts (highest volume, easiest), add phone-camera OCR as phase 2. Fall back to manual review queue for low-confidence extractions — agent flags for human, doesn't block"
                },
                {
                  risk: "Per-country VAT rules change",
                  mitigation: "Start with the 3 biggest markets (DE/IT/AT). Rules change infrequently (annual budgets). Config-driven rule engine means updates don't require code deploys — accountants can adjust field requirements"
                },
                {
                  risk: "Accountants are slow adopters",
                  mitigation: "Sell to the SME owner directly first (self-serve, EUR29/mo), then let the accountant discover the clean exports. Accountant buy-in comes after the SME client is already using it — the accountant sees the value, not the other way around"
                },
                {
                  risk: "Dext/Expensify add EU policy features",
                  mitigation: "They're US-first, 100+ person teams, roadmap driven by US enterprise. EU per-country VAT + per-company policy engine + accountant-referred distribution is a different product, not a feature gap they'll close fast"
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
      </main>
    </div>
  );
}
