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
          <span className="font-medium">Idea #5</span>
        </div>

        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <Badge className="text-base px-4 py-1">Idea #5</Badge>
            <Badge variant="outline" className="text-sm">AI / Data Ingestion</Badge>
          </div>
          <h1 className="text-3xl font-bold tracking-tight mb-2">SMB Document-Digestion Agent</h1>
          <p className="text-lg text-muted-foreground">
            An AI agent that ingests messy inbound business documents and structures them into the customer's own ERP / proprietary schema
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
          {[
            { label: "Category", value: "AI / Data Ingestion" },
            { label: "Target Market", value: "EU SMBs, Steuerberater" },
            { label: "Pricing Model", value: "€399-1.2K setup" },
            { label: "Build Time", value: "6-8 weeks" },
            { label: "Reference", value: "Rossum ($100M)" },
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
              <CardTitle className="text-xl">SMBs Drown in Inbound Documents</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Every SMB receives supplier price-lists, datasheets, spec sheets, quotes, and EDI feeds in arbitrary formats — spreadsheets, PDFs, scans. Getting that data into their ERP or internal system is manual, error-prone, and a constant tax on operations. The core problems:
              </p>
              <div className="space-y-3">
                {[
                  { title: "No two documents look alike", desc: "A supplier's price-list is a 40-column Excel with drifting headers; another's is a scanned PDF. Mapping each by hand takes hours and breaks on the next revision." },
                  { title: "ERP schema is proprietary", desc: "The customer's target schema (field names, units, SKUs) is unique. Generic OCR tools extract text but can't map it to the customer's system." },
                  { title: "US tools can't serve EU sovereignty", desc: "Rossum, DocuWare, Hyperscience are US/EU-mixed or enterprise-only. SMBs with GDPR obligations can't ship supplier data to non-compliant processors." },
                  { title: "Consultants do it manually", desc: "Steuerberater and DATEV shops charge hourly to re-key client documents into the right format. That margin is the opportunity." }
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
                    The moat is not extraction — that's commoditizing. The moat is the customer's OWN schema as a portable, open DSL mapping. Sell the mapping, deliver the digestion, and the switching cost lives in the customer's data, not your lock-in.
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
              <CardTitle className="text-xl">Self-Host + Service Document Digestion</CardTitle>
              <CardDescription>An AI agent that maps any inbound doc to the customer's schema, runs on their infrastructure (EU-sovereign), delivered as a service via partners</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {[
                  {
                    icon: <Globe className="h-5 w-5" />,
                    title: "Schema-Drift Mapping Layer",
                    desc: "Not OCR. Detects when a supplier changed a column header and re-maps automatically. Ships a human-reviewed mapping per source doc."
                  },
                  {
                    icon: <Shield className="h-5 w-5" />,
                    title: "EU-Sovereign, Self-Hostable",
                    desc: "Runs inside the customer's VPS or the partner's EU region. No document egress. GDPR Article 28 DPA included by default."
                  },
                  {
                    icon: <Users className="h-5 w-5" />,
                    title: "Partner-Operated Default",
                    desc: "Steuerberater / DATEV consultants deploy and operate it for the SMB. They own the relationship; you own the runtime + mapping library."
                  },
                  {
                    icon: <DollarSign className="h-5 w-5" />,
                    title: "Open-DSL Portability",
                    desc: "Mappings are exported as an open, documented DSL. Customer can leave with their mappings — defuses the lock-in objection, builds trust."
                  },
                  {
                    icon: <CheckCircle className="h-5 w-5" />,
                    title: "Arbitrary-Schema Target",
                    desc: "Maps to the customer's ERP, CSV, or custom API. One vertical slice first (datasheets), then any doc type → any schema."
                  },
                  {
                    icon: <Tag className="h-5 w-5" />,
                    title: "Anonymized Template Library",
                    desc: "Opt-in contribution of mapping templates (no document data) builds a data moat across customers without privacy risk."
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
                    <span><strong>Rossum</strong> (schema-based doc AI)</span>
                    <span className="font-mono">$100M Series A</span>
                  </li>
                  <li className="flex justify-between">
                    <span><strong>ABBYY Vintage</strong> (doc skills marketplace)</span>
                    <span className="font-mono">~$200M est.</span>
                  </li>
                  <li className="flex justify-between">
                    <span><strong>DocuWare / Hyperscience</strong> (enterprise)</span>
                    <span className="font-mono">$50M+ ARR</span>
                  </li>
                  <li className="flex justify-between">
                    <span><strong>Vertical doc-AI niche</strong> (SMB-focused)</span>
                    <span className="font-mono">€5-25K MRR</span>
                  </li>
                </ul>
              </div>

              <Separator />

              <div>
                <h3 className="text-lg font-semibold mb-4">Why This Wins</h3>
                <div className="space-y-3">
                  {[
                    {
                      title: "Channel-led GTM is proven",
                      desc: "Xero (250k accountants) and Shopify Experts show partner-delivered SMB software scales without dilution. Steuerberater are the EU equivalent."
                    },
                    {
                      title: "Repositioning beat OCR",
                      desc: "Rossum repositioned from OCR to 'cognitive capture' and was acquired by Coupa. The mapping-layer framing is the same move, at SMB price point."
                    },
                    {
                      title: "Sovereignty is a wedge",
                      desc: "US incumbents can't easily promise no-egress EU hosting. GDPR-bound SMBs will pay a premium for compliance."
                    },
                    {
                      title: "Data moat compounds",
                      desc: "Anonymized mapping templates improve accuracy across all customers; each new partner adds coverage at near-zero marginal cost."
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
              <CardTitle className="text-xl">Setup + Recurring Mapping</CardTitle>
              <CardDescription>€399-1.2K one-time setup + €19/mo per active mapping, partner margin on top</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-3">
                {[
                  {
                    name: "Self-Serve",
                    price: "€399 + €19/mo",
                    desc: "1 doc type, 1 mapping path, self-hosted. Customer runs it. EU hosting guide included.",
                    features: ["1 vertical slice", "Open-DSL export", "Community support", "GDPR DPA template"],
                    popular: false
                  },
                  {
                    name: "Partner-Operated",
                    price: "€1.2K + €19/mo",
                    desc: "Steuerberater deploys + operates for the SMB. 20% rev-share to partner. White-label ready.",
                    features: ["Full setup by partner", "Up to 5 mappings", "White-label", "Priority support"],
                    popular: true
                  },
                  {
                    name: "Marketplace",
                    price: "€19/mo",
                    desc: "Access the anonymized mapping-template library. Per-template microtransactions for rare schemas.",
                    features: ["Template library", "Rare-schema add-ons", "No lock-in", "Pay-per-mapping"],
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
                        {plan.popular ? "Partner Onboarding" : "Choose Plan"}
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
              <p className="text-sm text-muted-foreground text-center mt-4">
                M12 conservative estimate: €5.25K MRR (~€63K ARR) at 12 deployments. Layered路径 (partner → mapping-layer → France → template moat) projects €10.5K MRR.
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
              <CardDescription>Self-hostable, EU-region, LLM-orchestrated extraction + mapping</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {[
                  "Next.js 14 (App Router)",
                  "Supabase (PostgreSQL + Auth)",
                  "LLM (Claude / local) for extraction",
                  "Vercel / Hetzner (EU regions)",
                  "Tailwind CSS",
                  "TypeScript",
                  "Open-DSL mapping format",
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
              <CardTitle className="text-xl">Validate the Mapping Moat First</CardTitle>
              <CardDescription>Prove the schema-drift mapping before building full extraction</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {[
                {
                  week: "Week 1",
                  title: "Problem Discovery (10 interviews)",
                  desc: "Talk to 5 Steuerberater and 5 SMB ops leads. Confirm the pain is mapping (not extraction) and that they'll pay a partner to operate it."
                },
                {
                  week: "Week 2",
                  title: "Landing Page + Partner LOIs",
                  desc: "Page: 'We map your supplier docs to your ERP, EU-hosted.' Cold DM DATEV consultants. Target: 1 signed LOI + 1 paid pilot."
                },
                {
                  week: "Week 3",
                  title: "Vertical-Slice MVP",
                  desc: "Build one doc type (datasheet) → one mapping path. Manual-review the first 20 mappings. Target: 90% auto-match on known sources."
                },
                {
                  week: "Week 4",
                  title: "Pilot + Scope",
                  desc: "Run the slice for 1-2 pilot SMBs via the partner. Measure hours saved. Scope the next doc types based on real demand."
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
                "Deploy the slice on Limeon's EU infra to digest supplier price-lists into the energy consulting ERP",
                "Have the Steuerberater operate it for Limeon as the first partner-pilot",
                "Contribute Limeon's mappings to the anonymized template library (no document data)",
                "Measure re-keying hours saved vs the manual baseline",
                "Once proven, clone verticals: construction-BOM, pharma-datasheet, logistics-EDI"
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
                      <TableHead className="w-[30%]">Rossum / ABBYY</TableHead>
                      <TableHead className="w-[30%]">This Idea</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {[
                      ["EU-Sovereign Self-Host", "❌ US/enterprise", "✅ Customer infra"],
                      ["SMB Price Point", "❌ Enterprise", "✅ €399 + €19/mo"],
                      ["Partner-Operated Default", "❌ Direct sales", "✅ Steuerberater channel"],
                      ["Open-DSL Portability", "❌ Proprietary", "✅ Exportable mappings"],
                      ["Schema-Drift Detection", "⚠️ Manual retrain", "✅ Auto re-map"],
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
                  risk: "Moats are features, not walls",
                  mitigation: "Skeptic scored 4/10. Defense: open-DSL portability builds trust (partners prefer non-lock-in) + partner margin creates channel lock-in instead of product lock-in."
                },
                {
                  risk: "Extraction commoditizes via LLM function-calling",
                  mitigation: "Engineer flagged 12-month risk. Pivot value to the mapping layer + partner relationship, which function-calling can't replicate."
                },
                {
                  risk: "Any-doc → any-schema is not 30-day solvable",
                  mitigation: "Scope to one vertical slice (datasheet) + one mapping path. Expand only after pilot validates demand."
                },
                {
                  risk: "Solo-founder liability on managed tier",
                  mitigation: "Managed 'we-operate-it' tier is gated behind SRLS + EU-only infra. Default is partner-operated, not self-operated."
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
