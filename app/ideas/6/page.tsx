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
          <span className="font-medium">Idea #6</span>
        </div>

        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <Badge className="text-base px-4 py-1">Idea #6</Badge>
            <Badge variant="outline" className="text-sm">AI / Revenue Ops</Badge>
          </div>
          <h1 className="text-3xl font-bold tracking-tight mb-2">Failed-Payment Dunning & Recovery Agent</h1>
          <p className="text-lg text-muted-foreground">
            An autonomous agent that detects failed subscription payments, classifies the decline reason, and runs a localized EU dunning + recovery sequence — recovering churned MRR without a human in the loop
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
          {[
            { label: "Category", value: "AI / Revenue Ops" },
            { label: "Target Market", value: "EU subscription SMBs" },
            { label: "Pricing Model", value: "€29-99/mo" },
            { label: "Build Time", value: "3-4 weeks" },
            { label: "Reference", value: "Churn Buster" },
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
              <CardTitle className="text-xl">EU SMBs Bleed 5-15% MRR to Silent Failed Payments</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Every EU subscription business loses recurring revenue to failed payments — expired cards, insufficient funds, hard declines, and SEPA/GoCardless mandates that quietly lapse. Stripe retries on a US-centric English schedule; the founder's "dunning" is usually a forgotten Zapier or nothing at all. The core problems:
              </p>
              <div className="space-y-3">
                {[
                  { title: "Stripe's default dunning is one-size-fits-all", desc: "A fixed 3-email English sequence with no DE/IT/AT localization, no channel choice (no WhatsApp), and no awareness of SCA/PSD2 retry windows. It recovers a fraction of what a tuned sequence would." },
                  { title: "Decline reason is the whole game", desc: "Insufficient funds (retry later, soft) vs expired card (ask to update, can't auto-retry) vs hard decline (stop, avoid fees). Generic tools treat every failure identically and waste retries or spam churners." },
                  { title: "EU SMBs can't ship dunning to US processors compliantly", desc: "GDPR-bound SMBs with SEPA mandates can't pipe payer data to a US dunning SaaS without a DPA nightmare. EU-hosted, no-egress recovery is the wedge." },
                  { title: "Founders chase it by hand", desc: "Solo founders manually email customers about failed payments — hours per week of boring, awkward work they hate. The recovered margin is real; the labor is the blocker." }
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
                    The moat is not the retry — Stripe already does that. The moat is a localized, channel-aware, decline-classified recovery sequence as a portable agent. Sell the recovery, deliver the retention, keep the human out of the loop. The switching cost lives in the recovered-MRR dashboard and the anonymized sequence library, not in lock-in.
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
              <CardTitle className="text-xl">Self-Host + Service Failed-Payment Recovery</CardTitle>
              <CardDescription>An AI agent that hooks Stripe webhooks, classifies declines, and runs a localized EU recovery sequence — retry timing, DE/IT/AT email + WhatsApp nudges, one-click update link — all on EU infra</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {[
                  {
                    icon: <Globe className="h-5 w-5" />,
                    title: "Decline-Reason Classifier",
                    desc: "Parses Stripe / Stripe-SEPA / GoCardless codes into soft / expired / hard and routes the right play. No wasted retries, no churned-card spam."
                  },
                  {
                    icon: <Shield className="h-5 w-5" />,
                    title: "Localized Sequence Engine",
                    desc: "Native DE/IT/AT language, right tone, right channel (email + WhatsApp Business API). Honors PSD2/SCA retry windows per region."
                  },
                  {
                    icon: <Users className="h-5 w-5" />,
                    title: "One-Click Update Link",
                    desc: "Branded link to the Stripe Customer Portal / SEPA mandate update. No login friction, no support ticket, highest recovery rate."
                  },
                  {
                    icon: <DollarSign className="h-5 w-5" />,
                    title: "EU-Sovereign, Self-Hostable",
                    desc: "Runs on Hetzner/EU region. No payer data egress. GDPR Article 28 DPA template included by default."
                  },
                  {
                    icon: <CheckCircle className="h-5 w-5" />,
                    title: "Recovery Dashboard",
                    desc: "MRR recovered, recovery rate, per-sequence performance — the metric the founder actually opens every Monday."
                  },
                  {
                    icon: <Tag className="h-5 w-5" />,
                    title: "Anonymized Playbook Library",
                    desc: "Opt-in contribution of sequence templates (no payer data) builds a cross-customer moat that lifts recovery for everyone."
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
                    <span><strong>Churn Buster</strong> (dunning for Stripe)</span>
                    <span className="font-mono">bootstrapped → acqui-hire</span>
                  </li>
                  <li className="flex justify-between">
                    <span><strong>ProfitWell / RETAIN</strong> (retention)</span>
                    <span className="font-mono">$50M+ ARR</span>
                  </li>
                  <li className="flex justify-between">
                    <span><strong>Flowjam niche report</strong> (dunning)</span>
                    <span className="font-mono">70-90% margins</span>
                  </li>
                  <li className="flex justify-between">
                    <span><strong>Vertical SaaS dunning</strong> (solo)</span>
                    <span className="font-mono">€3-8K MRR</span>
                  </li>
                </ul>
              </div>

              <Separator />

              <div>
                <h3 className="text-lg font-semibold mb-4">Why This Wins</h3>
                <div className="space-y-3">
                  {[
                    {
                      title: "Margin math is brutal-good",
                      desc: "Recovering 8% of failed payments on €100K MRR = €8K/mo recovered. A 5% recovery-share = €400/mo from one customer, or €49/mo flat — the tool pays for itself on the first save."
                    },
                    {
                      title: "Channel-led GTM is proven",
                      desc: "Sell into EU SMB tool communities, Stripe/SumUp resellers, and Steuerberater who literally watch client churn. No paid CAC needed for the first 50 customers."
                    },
                    {
                      title: "Sovereignty is a wedge",
                      desc: "US dunning SaaS can't promise no-egress EU hosting or SEPA-native handling. GDPR-bound SMBs pay a premium for compliant recovery."
                    },
                    {
                      title: "Data moat compounds",
                      desc: "Anonymized sequence templates improve recovery across all customers; each new vertical (SaaS, wellness, agency) adds coverage at near-zero marginal cost."
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
              <CardTitle className="text-xl">Flat + Outcome-Aligned Recovery</CardTitle>
              <CardDescription>€29-99/mo per account + optional 5% of MRR recovered (capped at €500/mo) — aligned to the money it returns</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-3">
                {[
                  {
                    name: "Self-Serve",
                    price: "€29/mo",
                    desc: "1 Stripe account, email-only dunning, EU-hosted. Self-setup in 10 minutes. No card to operate.",
                    features: ["Decline classifier", "DE/IT/AT email", "Recovery dashboard", "GDPR DPA template"],
                    popular: false
                  },
                  {
                    name: "Growth",
                    price: "€99/mo",
                    desc: "Multi-currency (EUR/SEPA), email + WhatsApp, localized sequences, recovery dashboard + playbook library.",
                    features: ["SEPA/GoCardless aware", "WhatsApp channel", "Localized DE/IT/AT", "Priority support"],
                    popular: true
                  },
                  {
                    name: "Recovery-Share",
                    price: "5% recovered",
                    desc: "No recovered, no bill. Capped at €500/mo. Aligns price to the MRR the agent returns — easiest yes for a skeptical founder.",
                    features: ["Outcome pricing", "All Growth features", "No flat fee", "Pay-per-save"],
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
                        {plan.popular ? "Start Growth" : "Choose Plan"}
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
              <p className="text-sm text-muted-foreground text-center mt-4">
                M12 conservative estimate: €5K MRR (~€60K ARR) at 60 self-serve + 10 growth. Layered path (reseller → SEPA → playbook moat) projects €8K MRR.
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
              <CardDescription>Self-hostable, EU-region, webhook-driven decline classification + localized recovery</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {[
                  "Next.js 14 (App Router)",
                  "Supabase (PostgreSQL + Auth)",
                  "Stripe webhooks + Customer Portal",
                  "GoCardless / SEPA mandates",
                  "WhatsApp Business API (EU)",
                  "LLM (Claude/Sonnet) for localization",
                  "Vercel / Hetzner (EU regions)",
                  "Tailwind CSS + TypeScript",
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
              <CardTitle className="text-xl">Prove Recovery Before Building the Full Agent</CardTitle>
              <CardDescription>Validate the decline-classified localized sequence before adding WhatsApp + SEPA</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {[
                {
                  week: "Week 1",
                  title: "Problem Discovery (10 interviews)",
                  desc: "Talk to 5 EU SMB founders and 5 freelancers. Confirm failed-payment % and that they'll pay a tool (not just 'nice to have')."
                },
                {
                  week: "Week 2",
                  title: "Landing Page + Reseller LOIs",
                  desc: "Page: 'We recover your failed payments, EU-hosted, DE/IT/AT.' Cold DM Stripe/SumUp resellers. Target: 1 paid pilot + 1 LOI."
                },
                {
                  week: "Week 3",
                  title: "Vertical-Slice MVP",
                  desc: "Stripe webhook → decline classifier → 3-email DE/IT/AT sequence. Manual-review the first 20 failures. Target: 40% recovery on known failures."
                },
                {
                  week: "Week 4",
                  title: "Pilot + Scope",
                  desc: "Run the slice for 1-2 pilot SMBs. Measure MRR recovered vs manual baseline. Scope WhatsApp + SEPA based on real demand."
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
              <CardDescription>Validate by dogfooding on Limeon srl first, then clone verticals</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              {[
                "Deploy the slice on Limeon's EU infra to recover failed energy-consulting subscription payments (Stripe + SEPA)",
                "Measure recovered MRR vs the manual baseline the founder currently does by hand",
                "Contribute Limeon's sequence templates to the anonymized playbook library (no payer data)",
                "Once proven, clone verticals: SaaS tooling, gym/wellness memberships, agency retainers"
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
                      <TableHead className="w-[30%]">Churn Buster / Stripe</TableHead>
                      <TableHead className="w-[30%]">This Idea</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {[
                      ["EU-Sovereign Self-Host", "❌ US/cloud", "✅ Hetzner EU"],
                      ["Localized DE/IT/AT", "❌ English-only", "✅ Native"],
                      ["WhatsApp Channel", "❌ Email only", "✅ Email + WhatsApp"],
                      ["SEPA/GoCardless Aware", "⚠️ Cards focus", "✅ SEPA-native"],
                      ["Outcome Pricing", "❌ Flat SaaS", "✅ 5% recovered (capped)"],
                      ["Template Data Moat", "❌ No", "✅ Anonymized library"]
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
                  risk: "Stripe's own dunning keeps improving",
                  mitigation: "Smart Retries is generic and English-only. Localization + WhatsApp + SEPA-native + EU sovereignty are the per-country wedges Stripe won't build. Defend there."
                },
                {
                  risk: "Recovery commoditizes via Stripe Smart Retries",
                  mitigation: "Value is the localized sequence + channel + EU compliance, which a generic engine lacks. Pivot emphasis to the recovery dashboard + playbook moat."
                },
                {
                  risk: "PSD2/SCA retry rules change",
                  mitigation: "Sequence engine honors retry windows from a legal-reviewed template set; EU-only scope keeps regulatory surface small and tractable."
                },
                {
                  risk: "Solo-founder liability on managed tier",
                  mitigation: "Default is self-serve; the managed 'we-operate-it' tier is gated behind SRLS + EU-only infra. Keep the human out of payer data."
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
