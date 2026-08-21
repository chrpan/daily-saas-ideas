"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { CheckCircle, XCircle, Tag, Zap, Users, DollarSign, Globe, Shield } from "lucide-react";
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
        {/* Idea Badge and Title */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <Badge className="text-base px-4 py-1">Idea #1</Badge>
            <Badge variant="outline" className="text-sm">Social Proof / Conversion</Badge>
          </div>
          <h1 className="text-3xl font-bold tracking-tight mb-2">Testimonial Widget for EU Freelancers</h1>
          <p className="text-lg text-muted-foreground">
            A GDPR-compliant, no-code testimonial collection and display tool tailored for freelancers and agencies in Italy, Germany, and Austria
          </p>
        </div>

        {/* Meta Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
          {[
            { label: "Category", value: "Social Proof / Conversion" },
            { label: "Target Market", value: "EU Freelancers & Agencies" },
            { label: "Pricing Model", value: "€19-99/mo tiered" },
            { label: "Build Time", value: "4-6 weeks" },
            { label: "Reference", value: "Senja ($83K MRR)" },
            { label: "Compliance", value: "GDPR, eIDAS, FatturaPA" }
          ].map((meta, i) => (
            <Card key={i} className="bg-muted/50">
              <CardContent className="p-4">
                <div className="text-xs text-muted-foreground uppercase tracking-wide mb-1">{meta.label}</div>
                <div className="text-sm font-medium">{meta.value}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Main Content Tabs */}
        <Tabs defaultValue="problem" className="mb-8">
          <TabsList className="mb-6">
            <TabsTrigger value="problem">The Problem</TabsTrigger>
            <TabsTrigger value="solution">The Solution</TabsTrigger>
            <TabsTrigger value="validation">Market Validation</TabsTrigger>
            <TabsTrigger value="pricing">Pricing</TabsTrigger>
            <TabsTrigger value="tech">Tech Stack</TabsTrigger>
            <TabsTrigger value="validation-plan">4-Week Plan</TabsTrigger>
          </TabsList>

          <TabsContent value="problem" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">The Problem</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  European freelancers and small agencies (Italy, Germany, Austria) struggle to collect and display client testimonials effectively. Existing tools like Senja ($83K MRR) and Testimonial.to ($40K MRR) are US-centric and lack:
                </p>
                <div className="space-y-3">
                  {[
                    { title: "GDPR-compliant data handling", desc: "EU freelancers legally cannot use tools that store client data on US servers without complex DPAs" },
                    { title: "Local language & cultural adaptation", desc: "Italian/German testimonial request flows, formal address (Lei/Sie), localized email templates" },
                    { title: "Integration with EU invoicing/compliance workflows", desc: "Link testimonials to completed projects verified via FatturaPA (Italy), E-Rechnung (Germany), or UBL (Austria)" },
                    { title: "VAT-compliant billing", desc: "Reverse charge, OSS/IOSS, proper EU invoice generation" }
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
            <Card className="bg-gradient-to-r from-primary to-secondary text-primary-foreground">
              <CardContent className="p-6">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 rounded-full bg-white/20 p-2">
                    <Zap className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2 text-primary-foreground">💡 The Insight</h3>
                    <p className="text-sm text-primary-foreground/80">
                      Freelancers in DE/AT/IT lose clients to competitors who display social proof. They <em>have</em> happy clients but no compliant, easy way to capture and showcase testimonials. The winner in this niche isn&apos;t a better widget—it&apos;s a <em>locally compliant</em> one.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="solution" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">The Solution</CardTitle>
                <CardDescription>A micro-SaaS that lets EU freelancers collect video/text testimonials via branded, GDPR-compliant forms and embed them as lightweight widgets on their sites</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {[
                    {
                      icon: <Globe className="h-5 w-5" />,
                      title: "EU-First Architecture",
                      desc: "Data hosted in EU (Frankfurt/Milan), GDPR Article 28 DPA included, Schrems II compliant, no US data transfers"
                    },
                    {
                      icon: <Shield className="h-5 w-5" />,
                      title: "Localized Collection Flows",
                      desc: "Italian (formal Lei), German (Sie), Austrian variants. Pre-built email/WhatsApp templates with culturally appropriate tone"
                    },
                    {
                      icon: <Tag className="h-5 w-5" />,
                      title: "Compliance-Linked Testimonials",
                      desc: "Optional: auto-verify testimonials against completed invoices via FatturaPA (IT), E-Rechnung (DE), or UBL (AT) APIs"
                    },
                    {
                      icon: <Users className="h-5 w-5" />,
                      title: "No-Code Embed",
                      desc: "One-line script tag or React/Vue component. Widgets: carousel, grid, masonry, video wall. Zero-dependency, <3KB gzipped"
                    },
                    {
                      icon: <DollarSign className="h-5 w-5" />,
                      title: "EU Billing Native",
                      desc: "Stripe + VAT compliance: reverse charge for B2B, OSS for B2C, proper EU invoices with VAT ID validation via VIES"
                    },
                    {
                      icon: <CheckCircle className="h-5 w-5" />,
                      title: "White-Label Ready",
                      desc: "Remove branding, custom domains, custom CSS. Agencies can resell to their clients (white-label tier)"
                    }
                  ].map((feature, i) => (
                    <Card key={i} className="bg-muted/30 border-dashed">
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
          </TabsContent>

          <TabsContent value="validation" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Market Validation (from Research)</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <div className="text-sm font-medium text-green-800 mb-3">📊 Reference Revenue Data</div>
                  <ul className="space-y-2 text-sm">
                    <li className="flex justify-between">
                      <span><strong>Senja</strong> (testimonial collection)</span>
                      <span className="font-mono">$83K MRR</span>
                    </li>
                    <li className="flex justify-between">
                      <span><strong>Testimonial.to</strong> (video testimonials)</span>
                      <span className="font-mono">$40K MRR</span>
                    </li>
                    <li className="flex justify-between">
                      <span><strong>Social-proof widgets category</strong> (niche players)</span>
                      <span className="font-mono">$15-25K MRR</span>
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
                        title: "Regulatory tailwind",
                        desc: "GDPR enforcement increasing, Schrems II invalidated Privacy Shield, EU companies actively seeking EU-hosted alternatives"
                      },
                      {
                        title: "Underserved market",
                        desc: "4.2M freelancers in Italy + 1.4M in Germany + 400K in Austria = ~6M addressable users"
                      },
                      {
                        title: "High willingness to pay",
                        desc: "Freelancers lose €2-5K/project without social proof; €29/mo is trivial insurance"
                      },
                      {
                        title: "Network effects",
                        desc: "Every embedded widget shows Powered by [YourTool] to the freelancer's clients (potential new users)"
                      },
                      {
                        title: "Low competition",
                        desc: "US tools dominate but can't easily serve EU compliance; local competitors are agencies, not SaaS"
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
          </TabsContent>

          <TabsContent value="pricing" className="space-y-4">
            <Tabs defaultValue="monthly">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold">Pricing Strategy</h3>
                <TabsList className="sm:w-auto">
                  <TabsTrigger value="monthly">Monthly</TabsTrigger>
                  <TabsTrigger value="annual">Annual (-20%)</TabsTrigger>
                </TabsList>
              </div>
              <div className="grid gap-4 sm:grid-cols-3">
                {[
                  {
                    name: "Starter",
                    price: "€19/mo",
                    desc: "Up to 50 testimonials, 3 widgets, basic customization, EU hosting, GDPR DPA, email support",
                    features: ["50 testimonials", "3 widgets", "EU hosting", "GDPR DPA", "Email support"],
                    popular: false
                  },
                  {
                    name: "Professional",
                    price: "€39/mo",
                    desc: "Unlimited testimonials, unlimited widgets, video testimonials, compliance linking, custom domains, priority support",
                    features: ["Unlimited testimonials", "Unlimited widgets", "Video testimonials", "Compliance linking", "Custom domains", "Priority support"],
                    popular: true
                  },
                  {
                    name: "Agency/White-Label",
                    price: "€99/mo",
                    desc: "Everything in Pro + remove branding, client sub-accounts, reseller dashboard, API access, SLA",
                    features: ["Client sub-accounts", "Reseller dashboard", "API access", "SLA", "Remove branding", "Custom CSS"],
                    popular: false
                  }
                ].map((plan, i) => (
                  <Card key={i} className={plan.popular ? "ring-2 ring-primary border-primary" : ""}>
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
            </Tabs>
          </TabsContent>

          <TabsContent value="tech" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Tech Stack</CardTitle>
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
                    "Zod (validation)"
                  ].map((tech) => (
                    <Badge key={tech} variant="outline" className="bg-muted/50">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="validation-plan" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">4-Week Validation Sprint</CardTitle>
                <CardDescription>Go from idea to validated pre-sales in 30 days — before writing any code</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {[
                  {
                    week: "Week 1",
                    title: "Problem Discovery (10 interviews)",
                    desc: "Join 3 niche communities: Italy (Freelance Italia Slack, Partita IVA Facebook groups), Germany (Gründer.de, Freelancermap forum), Austria (Gründerplattform, WKO forums). Run 10 interviews asking about their current testimonial workflow and pain points."
                  },
                  {
                    week: "Week 2",
                    title: "Landing Page Test",
                    desc: "Build simple page with value prop: Collect GDPR-compliant testimonials in Italian/German. EU-hosted. VAT-compliant billing. Drive 300 targeted visitors via cold DMs + €100 Meta ads targeting freelancers in IT/DE/AT. Target: 3-5% email signup."
                  },
                  {
                    week: "Week 3",
                    title: "Pre-Sell",
                    desc: "Email signups a founder's deal: €19/mo → €9/mo lifetime (first 20 founders). Stripe payment link with real payment. Target: 5-10 pre-payments before building. If <5, pivot or kill."
                  },
                  {
                    week: "Week 4",
                    title: "Scope MVP",
                    desc: "Interview pre-payers. Find the ONE feature they must have. Scope a 4-6 week build: Auth → Testimonial form → Widget embed → Stripe billing → EU hosting config. Nothing more."
                  }
                ].map((step, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-lg font-bold">
                      {i + 1}
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
          </TabsContent>
        </Tabs>

        {/* Dogfooding & Risks */}
        <div className="space-y-6 mb-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-xl">Dogfooding Plan (Limeon srl)</CardTitle>
              <CardDescription>Validate by dogfooding on Limeon srl first, then clone verticals</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              {[
                "Deploy MVP on testimonials.limeon.eu (EU-hosted)",
                "Collect testimonials from Limeon's energy consulting clients",
                "Embed widgets on Limeon's site and client-facing portals",
                "Test compliance linking: match testimonials to completed FatturaPA/E-Rechnung invoices",
                "Validate VAT billing: reverse charge invoices to Italian/German/Austrian B2B clients",
                "Once proven, create vertical flavors: testimonials-for-freelancers.it, testimonials-for-agenturen.de, testimonials-for-einzelunternehmer.at"
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
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
              <ScrollArea className="max-h-[500px] overflow-y-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-[40%]">Feature</TableHead>
                      <TableHead className="w-[30%]">Senja / Testimonial.to</TableHead>
                      <TableHead className="w-[30%]">This Idea</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {[
                      ["EU Data Hosting", "❌ US only", "✅ FRA/MIL"],
                      ["GDPR DPA Included", "❌ Complex/Enterprise", "✅ Auto-included"],
                      ["Italian/German Flows", "❌ English only", "✅ Native"],
                      ["FatturaPA/E-Rechnung Link", "❌ No", "✅ Optional"],
                      ["VAT-Compliant Billing", "❌ Manual", "✅ Automated"],
                      ["White-Label Reseller", "❌ No", "✅ Agency tier"]
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
                  risk: "EU compliance is complex",
                  mitigation: "Start with GDPR DPA template + EU hosting only; add FatturaPA/E-Rechnung linking post-MVP as premium feature"
                },
                {
                  risk: "Small TAM",
                  mitigation: "6M freelancers × 5% adoption × €39/mo = €11.7M ARR potential. Niche dominance → expand to all EU DACH + Benelux + Nordics"
                },
                {
                  risk: "Senja adds EU hosting",
                  mitigation: "They're US-focused, 2-3 person team. EU compliance + localization + white-label is a different product, not a feature. Speed to market matters"
                },
                {
                  risk: "Freelancers price-sensitive",
                  mitigation: "€19/mo starter. Lifetime deal for first 50 users builds tribe. Value = one saved client project"
                }
              ].map((item, i) => (
                <div key={i} className="flex gap-3">
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