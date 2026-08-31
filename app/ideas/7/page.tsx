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
          <span className="font-medium">Idea #7</span>
        </div>

        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <Badge className="text-base px-4 py-1">Idea #7</Badge>
            <Badge variant="outline" className="text-sm">IT Compliance / DNS</Badge>
          </div>
          <h1 className="text-3xl font-bold tracking-tight mb-2">Plain-English Infra-Compliance Checker for Small IT Operators</h1>
          <p className="text-lg text-muted-foreground">
            A self-serve checker that reads a domain's DMARC/SPF/DKIM and core infra-posture records, translates each into plain business language, flags misconfigurations, and hands the operator a one-click fix guide
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
          {[
            { label: "Category", value: "IT Compliance / DNS" },
            { label: "Target Market", value: "EU small IT / MSP" },
            { label: "Pricing Model", value: "€19-79/mo" },
            { label: "Build Time", value: "2-3 weeks" },
            { label: "Reference", value: "MXToolbox" },
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
              <CardTitle className="text-xl">Small IT Operators Are Blind to Their Own Email + Infra Posture</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                DMARC/SPF/DKIM are the three records that decide whether a company's email gets delivered or spoofed — and they are notoriously opaque. r/sysadmin threads repeat the same pain: small IT operators and MSPs can read the raw DNS but cannot explain to the business owner what "p=none" means, why mail is landing in spam, or how to fix it without breaking delivery. The core problems:
              </p>
              <div className="space-y-3">
                {[
                  { title: "Raw DNS with no translation", desc: "Vendor tools (MXToolbox, postmaster) display the literal record and a pass/fail. They don't say 'your invoices can be spoofed today' or 'tell the CEO to enable quarantine.' The business owner needs the sentence, not the semicolon." },
                  { title: "Fix path is tribal knowledge", desc: "The 'right' SPF include list or DMARC rollout plan lives in a senior sysadmin's head or a 200-comment StackExchange thread. A one-click, copy-paste fix guide per misconfiguration simply doesn't exist for the SMB tier." },
                  { title: "EU MSPs can't resell a US tool compliantly", desc: "GDPR-bound MSPs in DE/AT/IT hesitate to pipe client domains through a US-hosted checker. EU-hosted, no-log scanning is the wedge that lets them white-label it to clients." },
                  { title: "It's boring, recurring, and ignored", desc: "Posture drifts as domains, senders, and partners change. Nobody re-checks until a client's invoice gets spoofed. A scheduled re-scan turns a one-off audit into a retained €/mo relationship." }
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
                    The moat is not the DNS lookup — that's a free API. The moat is the plain-English translation + the prescribed fix, wrapped so an MSP can white-label it to 40 clients. Sell the explanation and the one-click guide; the scanning is the commodity you give away. Switching cost lives in the client report library and the scheduled re-scan, not in lock-in.
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
              <CardTitle className="text-xl">Self-Serve Plain-English Infra-Compliance Checker</CardTitle>
              <CardDescription>An agent that reads DMARC/SPF/DKIM + core posture, explains each record in business language, flags misconfigurations, and emits a one-click fix guide — EU-hosted, MSP-white-labelable</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {[
                  {
                    icon: <Globe className="h-5 w-5" />,
                    title: "Record Translator",
                    desc: "Turns each SPF/DKIM/DMARC line into a plain sentence: what it allows, what it blocks, and the business risk if it stays as-is."
                  },
                  {
                    icon: <Shield className="h-5 w-5" />,
                    title: "Misconfig Flagger",
                    desc: "Detects the 12 common failure modes (p=none, missing DKIM selector, overlapping SPF, typo'd include) and ranks by spoofing/deliverability impact."
                  },
                  {
                    icon: <Zap className="h-5 w-5" />,
                    title: "One-Click Fix Guide",
                    desc: "Per-finding copy-paste DNS record + rollout order (monitor → quarantine → reject) with the exact values to paste at the registrar."
                  },
                  {
                    icon: <Users className="h-5 w-5" />,
                    title: "MSP White-Label",
                    desc: "One account, many client domains, branded PDF report. The MSP's logo, not ours — sold as their compliance service."
                  },
                  {
                    icon: <DollarSign className="h-5 w-5" />,
                    title: "EU-Sovereign, No-Log",
                    desc: "Runs on Hetzner/EU region. Scan-only, no mail content, GDPR Article 28 DPA template included. Safe for GDPR-bound MSPs."
                  },
                  {
                    icon: <CheckCircle className="h-5 w-5" />,
                    title: "Scheduled Re-Scan",
                    desc: "Weekly/monthly posture drift check per domain. Turns a one-off audit into a retained subscription the MSP bills clients."
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
                    <span><strong>MXToolbox</strong> (DNS/compliance checker)</span>
                    <span className="font-mono">bootstrapped, decades-lived</span>
                  </li>
                  <li className="flex justify-between">
                    <span><strong>DMARCian</strong> (DMARC managed)</span>
                    <span className="font-mono">enterprise, $$/domain</span>
                  </li>
                  <li className="flex justify-between">
                    <span><strong>r/sysadmin pain threads</strong> (SPF/DKIM/DMARC)</span>
                    <span className="font-mono">recurring, unmet</span>
                  </li>
                  <li className="flex justify-between">
                    <span><strong>Vertical MSP wedge</strong> (solo SMB)</span>
                    <span className="font-mono">€2-6K MRR</span>
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
                      desc: "r/sysadmin and MSP communities repeat the same complaint: the records are opaque and the fix path is tribal. We are packaging an explanation + prescription that already exists only in senior heads."
                    },
                    {
                      title: "Channel-led GTM is proven",
                      desc: "Sell to MSPs and IT trade associations (BITKOM, Austrian economic chambers) who already serve 40+ SMBs each. One MSP LOI = 40 client domains. No paid CAC for the first cohort."
                    },
                    {
                      title: "Sovereignty is a wedge",
                      desc: "US checkers can't promise no-log EU hosting. GDPR-bound MSPs pay a premium to white-label a compliant scanner they can stand behind."
                    },
                    {
                      title: "Retention via re-scan",
                      desc: "Posture drifts; a one-off audit dies. Scheduled re-scan converts a €9 scan into a recurring €19-79/mo the MSP bills forward. Compounding, low-churn."
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
              <CardTitle className="text-xl">Flat + Scan-Per-Domain, MSP-White-Label</CardTitle>
              <CardDescription>€19-79/mo per account + optional €9/domain scan (pay-as-you-go) — aligned to the audits it runs</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-3">
                {[
                  {
                    name: "Self-Serve",
                    price: "€19/mo",
                    desc: "1 domain, unlimited re-scans, plain-English report + fix guide. Self-setup in 5 minutes. No card to operate.",
                    features: ["DMARC/SPF/DKIM", "Plain-English guide", "Re-scan weekly", "GDPR DPA template"],
                    popular: false
                  },
                  {
                    name: "MSP White-Label",
                    price: "€79/mo",
                    desc: "Unlimited client domains, branded PDF report, client portal, scheduled re-scan. The MSP resells it as their service.",
                    features: ["White-label report", "Client portal", "Bulk domains", "Priority support"],
                    popular: true
                  },
                  {
                    name: "Scan-Per-Domain",
                    price: "€9/scan",
                    desc: "No subscription. One-off compliance scan + fix guide. Easiest yes for a skeptical operator or a one-time audit.",
                    features: ["No commitment", "Full report", "One-click fix", "Pay-per-scan"],
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
                        {plan.popular ? "Start MSP" : "Choose Plan"}
                      </Button>
                    </CardFooter>
                  </Card>
                ))
              }
              <p className="text-sm text-muted-foreground text-center mt-4">
                M12 conservative estimate: €4K MRR (~€48K ARR) at 30 self-serve + 8 MSP (avg 15 client domains). Layered path (association channel → re-scan retention → posture alerts) projects €6K MRR.
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
              <CardDescription>Self-hostable, EU-region, DNS lookups + LLM plain-English translation + scheduled re-scan</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex flex-wrap gap-2">
                {[
                  "Next.js 14 (App Router)",
                  "Supabase (PostgreSQL + Auth)",
                  "DNS-over-HTTPS (Cloudflare/Google)",
                  "LLM (Claude/Sonnet) for translation",
                  "Vercel / Hetzner (EU regions)",
                  "Tailwind CSS + TypeScript",
                  "PDF report (react-pdf / Puppeteer EU)",
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
              <CardTitle className="text-xl">Prove the Translation Before Building White-Label</CardTitle>
              <CardDescription>Validate plain-English explanation + fix guide before adding MSP portal + re-scan</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {[
                {
                  week: "Week 1",
                  title: "Problem Discovery (10 interviews)",
                  desc: "Talk to 5 small IT operators / MSPs in DE/AT/IT. Confirm they can't explain DMARC to clients and will pay for a translated report + fix guide."
                },
                {
                  week: "Week 2",
                  title: "Landing Page + MSP LOIs",
                  desc: "Page: 'We explain your email security in plain German/Italian.' Cold DM BITKOM / chamber-listed MSPs. Target: 1 paid pilot + 1 LOI."
                },
                {
                  week: "Week 3",
                  title: "Vertical-Slice MVP",
                  desc: "Domain input → DNS lookup → plain-English report + fix guide for the top 5 misconfigs. Manual-review first 20 scans. Target: operator says 'now I get it.'"
                },
                {
                  week: "Week 4",
                  title: "Pilot + Scope",
                  desc: "Run the slice for 1-2 MSPs' client domains. Measure time-saved vs manual. Scope white-label + re-scan on real demand."
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
                "Run the checker on Limeon's own domains (limeon.it / consulting domains) — surface any real SPF/DKIM/DMARC gaps the founder didn't know about",
                "Use the generated plain-English report as the internal fix ticket; measure minutes saved vs manual lookup",
                "Hand the white-label report format to one Limeon IT-partner MSP as a free pilot",
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
                      <TableHead className="w-[30%]">MXToolbox / DMARCian</TableHead>
                      <TableHead className="w-[30%]">This Idea</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {[
                      ["Plain-English Translation", "❌ Raw record + pass/fail", "✅ Business sentence"],
                      ["One-Click Fix Guide", "⚠️ Docs link", "✅ Copy-paste record"],
                      ["EU-Sovereign No-Log", "❌ US-hosted", "✅ Hetzner EU"],
                      ["MSP White-Label", "⚠️ Enterprise only", "✅ Built-in"],
                      ["Scheduled Re-Scan", "⚠️ Manual", "✅ Auto drift check"],
                      ["DE/IT/AT Language", "❌ English-only", "✅ Native"]
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
                  risk: "DNS lookups are a commodity",
                  mitigation: "The lookup is free; the moat is translation + prescription + white-label + re-scan. Give the scan away, charge for the explanation and the client report library."
                },
                {
                  risk: "Enterprises (DMARCian) move down-market",
                  mitigation: "They sell to security teams, not MSPs serving 40 SMBs. White-label + native DE/IT/AT + no-log EU hosting is the per-country wedge they won't build."
                },
                {
                  risk: "Misconfig fix breaks delivery",
                  mitigation: "Rollout order is monitor → quarantine → reject, with explicit 'do not jump to reject' guardrails. Report states the safe sequence; we never auto-write DNS."
                },
                {
                  risk: "Scope creep into full GRC",
                  mitigation: "Stay narrow: email-auth + core posture only. Full compliance suites are a different product. Defend the boring wedge."
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
