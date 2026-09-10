"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { CheckCircle, XCircle, Tag, Zap, Users, DollarSign, Globe, Shield, ArrowRight, Clock, GitBranch } from "lucide-react";
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
          <span className="font-medium">Idea #14</span>
        </div>

        {/* Idea Badge and Title */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <Badge className="text-base px-4 py-1">Idea #14</Badge>
            <Badge variant="outline" className="text-sm">AI / Compliance</Badge>
          </div>
          <h1 className="text-3xl font-bold tracking-tight mb-2">EU AI Act Compliance Dossier for Skilled Trades (Handwerk)</h1>
          <p className="text-lg text-muted-foreground">
            A plain-language EU AI Act compliance dossier and operational AI-tool safety checklist for craft businesses in DE/AT/IT
          </p>
        </div>

        {/* Meta Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
          {[
            { label: "Category", value: "AI / Compliance" },
            { label: "Target Market", value: "EU skilled trades (Handwerk), craft chambers" },
            { label: "Pricing Model", value: "EUR29-99/mo" },
            { label: "Build Time", value: "4-6 weeks" },
            { label: "Reference", value: "EU AI Act (Regulation 2024/1689)" },
            { label: "Compliance", value: "EU AI Act, GDPR, Handwerk chamber rules" }
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
            <span className="text-destructive">Error</span> The Problem
          </h2>
          <Card>
            <CardHeader>
              <CardTitle className="text-xl">EU Skilled Trades Face AI Act Compliance Without Expertise</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                German, Austrian, and Italian craft businesses (Handwerk, Gewerbe) are adopting AI tools — for customer communication, quoting, scheduling, document processing — but the EU AI Act (Regulation 2024/1689) imposes transparency, risk-management, and documentation obligations that most small craft businesses have neither the time nor the expertise to satisfy. The result:
              </p>
              <div className="space-y-3">
                {[
                  { title: "No structured compliance mapping", desc: "Craft businesses use a patchwork of AI tools (chatbots, scheduling assistants, image generators for portfolios) with no clear view of which tools fall under which AI Act risk tier" },
                  { title: "Chamber guidance is generic", desc: "HWK/IHK/FO chambers run AI training for members but stop at awareness — they don't produce a business-specific, tool-by-tool compliance dossier the business can actually use in an audit" },
                  { title: "No recurring review process", desc: "As the tool stack changes (new tools added, old ones retired, vendor updates), the compliance picture drifts — there is no lightweight mechanism to keep the dossier current" },
                  { title: "No chamber-backed distribution trust", desc: "A one-shot PDF prompt output has no credibility; a chamber-distributed, sector-specific dossier backed by the same trust channel that delivers the AI training does" }
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
                  <GitBranch className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2 text-primary-foreground">The Insight</h3>
                  <p className="text-sm text-primary-foreground/80">
                    The winning product isn't a generic AI Act explanation — it's a <em>chamber-distributed, sector-specific, tool-by-tool compliance dossier</em> that a 6-person roofing or electrical business can hand to an auditor and say "this is our AI tool stack, here's how each one maps to the AI Act, and here's what we're doing about it." The distribution channel (HWK/IHK/FO chambers) is the moat — they already own the trust relationship with these businesses.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* The Solution */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <span className="text-green-500">Check</span> The Solution
          </h2>
          <Card>
            <CardHeader>
              <CardTitle className="text-xl">A Chamber-Distributed AI Act Compliance Agent for the Handwerk</CardTitle>
              <CardDescription>A self-serve agent that reads a craft business's AI tool stack and workflows, maps each tool to the EU AI Act risk tier, produces a plain-language compliance dossier, and refreshes it as the stack changes — distributed through HWK/IHK/FO chambers as a member benefit</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {[
                  {
                    icon: <Shield className="h-5 w-5" />,
                    title: "Tool-by-Tool AI Act Mapping",
                    desc: "For each AI tool the business uses (customer chatbot, scheduling assistant, image generator, document summarizer, quote optimizer), the agent classifies it against the EU AI Act risk tiers (prohibited / high-risk / transparency / minimal) and explains what obligations attach"
                  },
                  {
                    icon: <Globe className="h-5 w-5" />,
                    title: "Sector-Specific Compliance Dossier",
                    desc: "A printable, plain-language PDF dossier written for a craft business — not a legal department — that covers: tool inventory, risk classification, operational safeguards, documentation, and a recurring review checklist"
                  },
                  {
                    icon: <Tag className="h-5 w-5" />,
                    title: "Workflow-Aware Safety Checklist",
                    desc: "The agent doesn't just classify tools — it maps them to the craft business's real workflows (customer intake, quoting, scheduling, invoicing, after-sales) and produces a short safety checklist for each workflow: what data flows through, what the AI does, what the human must still verify"
                  },
                  {
                    icon: <Users className="h-5 w-5" />,
                    title: "Chamber Distribution Integration",
                    desc: "Delivered as a member benefit through HWK/IHK/FO chamber networks that already run AI training for members — the chamber introduces the tool, the tool produces the dossier, the chamber validates the format. No cold outreach, no personal brand needed"
                  },
                  {
                    icon: <DollarSign className="h-5 w-5" />,
                    title: "Recurring Review Subscription",
                    desc: "AI tool stacks change. A monthly/quarterly review prompt the business runs (or the agent runs autonomously) updates the dossier: new tools flagged, old ones retired, risk tier changes noted. Recurring revenue from a living document, not a one-shot PDF"
                  },
                  {
                    icon: <CheckCircle className="h-5 w-5" />,
                    title: "DE/AT/IT Localized Output",
                    desc: "Dossier produced in the business's language (German, Italian) with local regulatory references (Handwerksordnung, Austrian Gewerbe, Italian D.Lgs. 82/2024 transposition) — not an English-only template that a 70-year-old master electrician can't use"
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
            <span className="text-blue-500">ChartBar</span> Market Validation
          </h2>
          <Card>
            <CardHeader>
              <CardTitle className="text-xl">Market Validation (from Research)</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <div className="text-sm font-medium text-green-800 mb-3">Reference Signals</div>
                <ul className="space-y-2 text-sm">
                  <li className="flex justify-between">
                    <span><strong>German craft chambers (HWK/IHK)</strong> — already running AI training for member businesses</span>
                    <span className="font-mono">channel exists</span>
                  </li>
                  <li className="flex justify-between">
                    <span><strong>EU AI Act</strong> (Regulation 2024/1689) — phased enforcement, obligations rolling in</span>
                    <span className="font-mono">regulatory tailwind</span>
                  </li>
                  <li className="flex justify-between">
                    <span><strong>Italian AI4I + Unioncamere</strong> national rollout for SME AI adoption</span>
                    <span className="font-mono">parallel distribution</span>
                  </li>
                  <li className="flex justify-between">
                    <span><strong>6M+ EU skilled trades</strong> (Handwerk/Gewerbe) — fragmented, underserved by SaaS</span>
                    <span className="font-mono">addressable base</span>
                  </li>
                </ul>
              </div>

              <Separator />

              <div>
                <h3 className="text-lg font-semibold mb-4">Why This Niche Wins</h3>
                <div className="space-y-3">
                  {[
                    {
                      title: "Regulatory tailwind",
                      desc: "EU AI Act enforcement is rolling in phases; craft businesses that adopted AI tools in the 2024-2026 wave will need compliance documentation and most don't have it"
                    },
                    {
                      title: "Distribution already exists",
                      desc: "HWK/IHK/FO chambers already run AI training for member businesses — they are the trust channel. The product slots into an existing member-benefit distribution, not cold outreach"
                    },
                    {
                      title: "High willingness to pay via chamber",
                      desc: "A craft business won't pay 100 EUR for a compliance dossier on its own — but will pay a chamber-negotiated rate (EUR29-99/mo) as a member benefit, especially with recurring review included"
                    },
                    {
                      title: "Recurring revenue from a living document",
                      desc: "Unlike a one-shot PDF, the dossier refreshes as the tool stack changes — monthly review prompts, quarterly auto-refresh, annual chamber re-certification. Subscriptions, not one-off fees"
                    },
                    {
                      title: "Low competition",
                      desc: "Legal-tech compliance tools target enterprise. A plain-language, chamber-distributed, sector-specific dossier for a 6-person roofing business is a different product and a different market"
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
            <span className="text-purple-500">CurrencyDollar</span> Pricing Strategy
          </h2>
          <Card>
            <CardHeader>
              <CardTitle className="text-xl">Tierd Pricing</CardTitle>
              <CardDescription>EUR29-99/mo tiered pricing distributed through craft chambers as a member benefit</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-3">
                {[
                  {
                    name: "Starter",
                    price: "EUR29/mo",
                    desc: "One-time dossier for a single business location, up to 5 AI tools, German output, basic risk classification, PDF export",
                    features: ["1 business location", "Up to 5 AI tools", "German output", "Basic risk classification", "PDF export"],
                    popular: false
                  },
                  {
                    name: "Professional",
                    price: "EUR59/mo",
                    desc: "Multi-location dossier (up to 3 sites), unlimited tools, German + Italian output, workflow-aware safety checklists, recurring monthly review",
                    features: ["Up to 3 locations", "Unlimited tools", "DE + IT output", "Workflow checklists", "Monthly review"],
                    popular: true
                  },
                  {
                    name: "Chamber Partner",
                    price: "EUR99/mo",
                    desc: "Unlimited locations, all EU languages, chamber-branded dossier templates, API access for chamber member portal integration, annual recertification workflow",
                    features: ["Unlimited locations", "All EU languages", "Chamber-branded templates", "API integration", "Annual recertification"],
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
            <span className="text-gray-500">Zap</span> Tech Stack
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
                  "React Email (localized templates)",
                  "Zod (validation)",
                  "PDF generation (react-pdf / @react-pdf/renderer)"
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
            <span className="text-orange-500">CalendarDays</span> 4-Week Validation Sprint
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
                  title: "Chamber Alignment + Problem Discovery (5 interviews)",
                  desc: "Contact 2-3 HWK/IHK chambers (start with a single German state — e.g. HWK Bayern or IHK Nord) and 3-5 master craft businesses (Elektro, Sanitär, Dachdecker) who have adopted AI tools. Confirm: (1) chambers are running AI training and would distribute a compliance dossier as a member benefit, (2) businesses have a tool stack they can't map to AI Act risk tiers, (3) they'd pay a chamber-negotiated subscription for a living dossier"
                },
                {
                  week: "Week 2",
                  title: "Dossier Prototype + Chamber Pilot",
                  desc: "Produce a one-off dossier manually for 1-2 pilot craft businesses using a structured prompt + the EU AI Act text + the business's tool list. Deliver it through the chamber contact. Get chamber feedback on format, language, and whether they'd list it as a member benefit. Get 2-3 businesses to commit to a paid subscription if the dossier is delivered monthly"
                },
                {
                  week: "Week 3",
                  title: "Pre-Sell",
                  desc: "Offer the recurring dossier (EUR29-99/mo) to the pilot businesses and any businesses introduced by the chamber. Target: 3-5 paid subscribers before building the agent. If <3, the chamber distribution isn't working — pivot to a different chamber channel or kill"
                },
                  week: "Week 4",
                  title: "Scope MVP Agent",
                  desc: "Interview the pre-paying businesses. Find the ONE output they must have (the dossier PDF + monthly refresh). Scope a 4-6 week build: business onboarding form (tool list + workflows + language) → AI Act risk classification agent → dossier PDF generator → monthly review prompt → Stripe billing → EU hosting config. Nothing more"
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
                "Run the agent against Limeon srl's own AI tool stack and produce the compliance dossier internally first",
                "Validate the AI Act risk classification logic against the actual EU AI Act text and known tool classifications",
                "Test the recurring review prompt: run it monthly on Limeon's tool stack and confirm the dossier stays current",
                "Produce a German-language dossier for Limeon's DE-facing side to validate localization quality",
                "Once proven, approach a single HWK/IHK chamber (start small — e.g. HWK Wien or IHK Nord) with the dossier format and a pilot offer",
                "If chamber pilot works, clone verticals: Handwerk-compliance.de, Handwerk-compliance.at, mestieri-compliance.it"
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
                      <TableHead className="w[30%]">Enterprise Legal-Tech Compliance Tools</TableHead>
                      <TableHead className="w-[30%]">This Idea</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {[
                      ["Target user", "Legal departments, enterprise", "6-person craft business owner"],
                      ["Output format", "Formal legal report, ISO-style", "Plain-language dossier in DE/IT"],
                      ["Distribution", "Direct enterprise sales", "Chamber network member benefit"],
                      ["Recurring model", "Annual enterprise contract", "EUR29-99/mo subscription"],
                      ["Localization", "English / major EU languages", "DE + IT, Handwerk-specific refs"],
                      ["Update model", "Annual review (expensive)", "Monthly review prompt (self-serve)"]
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
                  risk: "EU AI Act interpretation is complex and fast-moving",
                  mitigation: "Start with a tool-classification agent that maps to the Act's explicit risk tiers (prohibited / high-risk / transparency / minimal) — not a legal opinion. Partner with a single EU compliance lawyer for the classification ruleset as a one-time setup cost. Refresh the ruleset as the Act's guidance evolves"
                },
                {
                  risk: "Chamber distribution is slow and relationship-driven",
                  mitigation: "Start with a single chamber in a single state (HWK Bayern or IHK Nord). One champion contact is enough to pilot. If the chamber won't distribute, fall back to direct-to-craft-business via trade-association channels and craft-business social media (Handwerk Facebook groups, Pinterest craft communities)"
                },
                {
                  risk: "Small TAM per country",
                  desc: "Each country's Handwerk population is 1-2M businesses — but fragmented. Niche dominance in one country (e.g. DE) → replicate to AT/IT via chamber partnerships. 1% adoption of DE Handwerk at EUR59/mo = EUR6M ARR — not a huge market but a defensible one"
                },
                {
                  risk: "Free AI Act templates exist",
                  desc: "A free one-shot PDF prompt is not a competitor to a chamber-distributed, sector-specific, tool-by-tool, recurring-review dossier. The differentiator is the distribution trust + the recurring review + the plain-language localization — not the document itself"
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
