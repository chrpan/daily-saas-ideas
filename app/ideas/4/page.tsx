"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { CheckCircle, XCircle, Tag, Zap, Users, DollarSign, Globe, Shield, ArrowRight, Clock, ArrowLeft, TrendingUp, TrendingDown, PieChart } from "lucide-react";
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
          <span className="font-medium">Idea #4</span>
        </div>

        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <Badge className="text-base px-4 py-1">Idea #4</Badge>
            <Badge variant="outline" className="text-sm">FinTech / Crypto</Badge>
          </div>
          <h1 className="text-3xl font-bold tracking-tight mb-2">Cryptocurrency Portfolio Tracker</h1>
          <p className="text-lg text-muted-foreground">
            Real-time crypto portfolio tracking with AI-driven optimization, tax reporting, and diversification guidance
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
          {[
            { label: "Category", value: "FinTech / Crypto" },
            { label: "Target Market", value: "Crypto Investors, Traders" },
            { label: "Pricing Model", value: "$19-99/mo" },
            { label: "Build Time", value: "10-14 weeks" },
            { label: "Reference", value: "CoinTracker ($200M valuation)" },
            { label: "Compliance", value: "GDPR, KYC/AML, SOC-2" }
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
              <CardTitle className="text-xl">Crypto Investors Struggle with Portfolio Complexity</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Crypto investors hold assets across 5+ exchanges and 10+ wallets. They have no clear view of their holdings, performance, or tax obligations. The core problems:
              </p>
              <div className="space-y-3">
                {[
                  { title: "Fragmented portfolio view", desc: "Assets spread across Coinbase, Binance, MetaMask, Ledger, DeFi protocols. No single dashboard shows total value, allocation, or performance." },
                  { title: "Tax reporting is a nightmare", desc: "Every trade, swap, stake, and airdrop is a taxable event. Manual tracking takes 20+ hours per tax season. Mistakes cost thousands." },
                  { title: "No diversification guidance", desc: "Investors buy what's hot without understanding their actual allocation. 80% in one coin is common. No one tells them they're overexposed." },
                  { title: "Price alerts are basic", desc: "Most trackers only do simple price thresholds. No 'alert me when my portfolio drops 10%' or 'alert me when Ethereum dominance shifts'." }
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
                    Crypto investors don't need another price tracker. They need a portfolio co-pilot. The winning tool doesn't just show what you hold — it tells you what you should do about it: rebalance, diversify, harvest losses, prepare for tax time.
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
              <CardTitle className="text-xl">AI Portfolio Co-Pilot for Crypto</CardTitle>
              <CardDescription>A real-time portfolio tracker with AI-driven optimization, tax reporting, and diversification guidance across all exchanges and wallets</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {[
                  {
                    icon: <Globe className="h-5 w-5" />,
                    title: "Unified Multi-Source Tracking",
                    desc: "Connect 100+ exchanges (Binance, Coinbase, Kraken, etc.) and 50+ wallets (MetaMask, Ledger, Trezor). Automatic balance sync with real-time prices."
                  },
                  {
                    icon: <Shield className="h-5 w-5" />,
                    title: "AI Tax Engine",
                    desc: "Auto-classify every transaction (trade, swap, stake, airdrop, DeFi). Generate tax reports for 50+ countries. Crypto-to-crypto swaps, staking rewards, and gas fees all handled correctly."
                  },
                  {
                    icon: <Users className="h-5 w-5" />,
                    title: "Diversification Analytics",
                    desc: "AI analyzes your portfolio and shows: allocation breakdown, concentration risk, correlation between holdings, suggested rebalancing targets based on your risk profile."
                  },
                  {
                    icon: <DollarSign className="h-5 w-5" />,
                    title: "Smart Price Alerts",
                    desc: "Not just 'BTC hits $50K'. AI-powered alerts: 'Your portfolio is down 15% this week', 'ETH has dropped below its 50-day MA', 'Gas fees are spiking — consider timing'"
                  },
                  {
                    icon: <CheckCircle className="h-5 w-5" />,
                    title: "Tax-Loss Harvesting",
                    desc: "Identify losing positions that can be sold to offset gains. AI suggests optimal harvest timing considering wash sale rules (US) and local tax regulations."
                  },
                  {
                    icon: <Tag className="h-5 w-5" />,
                    title: "DeFi & NFTs",
                    desc: "Track staking rewards, liquidity pool positions, yield farming returns, and NFT holdings. All-in-one view including the 'hidden' DeFi positions most trackers miss."
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
                    <span><strong>CoinTracker</strong> (tax + portfolio)</span>
                    <span className="font-mono">$200M valuation</span>
                  </li>
                  <li className="flex justify-between">
                    <span><strong>Koinly</strong> (crypto tax)</span>
                    <span className="font-mono">$60M ARR</span>
                  </li>
                  <li className="flex justify-between">
                    <span><strong>Delta</strong> (portfolio tracker)</span>
                    <span className="font-mono">$15M ARR</span>
                  </li>
                  <li className="flex justify-between">
                    <span><strong>Blockfolio</strong> (acquired by FTX)</span>
                    <span className="font-mono">Exit to FTX</span>
                  </li>
                  <li className="flex justify-between">
                    <span><strong>Crypto portfolio tools</strong> (mid-tier)</span>
                    <span className="font-mono">$20K-200K MRR</span>
                  </li>
                </ul>
              </div>

              <Separator />

              <div>
                <h3 className="text-lg font-semibold mb-4">Why This Niche Wins</h3>
                <div className="space-y-3">
                  {[
                    {
                      title: "Crypto adoption is growing",
                      desc: "580M+ crypto owners globally. Even 2% using a paid portfolio tool = 11.6M potential users"
                    },
                    {
                      title: "Tax pain is acute and recurring",
                      desc: "Every crypto user owes taxes on trades. Tax time is a guaranteed pain point. Users tolerate no frictions at tax season."
                    },
                    {
                      title: "Portfolio tracking is underserved",
                      desc: "Most tools do one thing well (tax OR tracking) but not both. An integrated co-pilot is rare."
                    },
                    {
                      title: "AI adds real value here",
                      desc: "Diversification analysis, tax optimization suggestions, and rebalancing recommendations are genuinely hard to do manually. AI makes it accessible."
                    },
                    {
                      title: "Network effects via sharing",
                      desc: "Users share portfolio summaries with family/partners. Some upgrade to see more detail."
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
              <CardTitle className="text-xl">Tiered Pricing</CardTitle>
              <CardDescription>$19-99/mo focused on portfolio size and tax features (the pain point)</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-3">
                {[
                  {
                    name: "Basic",
                    price: "$19/mo",
                    desc: "Unlimited portfolios, basic tracking, price alerts, simple tax summary",
                    features: ["Unlimited portfolios", "Basic tracking", "Price alerts", "Tax summary (basic)"],
                    popular: false
                  },
                  {
                    name: "Pro",
                    price: "$49/mo",
                    desc: "Tax reporting for 5 countries, DeFi tracking, diversification analytics, tax-loss harvesting suggestions",
                    features: ["Tax reporting (5 countries)", "DeFi tracking", "Diversification analytics", "Tax-loss harvesting"],
                    popular: true
                  },
                  {
                    name: "Turbo",
                    price: "$99/mo",
                    desc: "Everything in Pro + full tax filing support, API access, priority AI coach, custom alerts, white-label reports",
                    features: ["Full tax filing", "API access", "AI portfolio coach", "Custom alerts", "White-label reports"],
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
                        {plan.popular ? "Start Pro Trial" : "Choose Basic"}
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
              <CardTitle className="text-xl">Real-Time Data Stack</CardTitle>
              <CardDescription>Stack built for real-time crypto data aggregation with AI analysis capabilities</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {[
                  "Next.js 14 (App Router)",
                  "Supabase (PostgreSQL + Auth + Vector for AI)",
                  "CoinGecko/CoinMarketCap APIs (prices)",
                  "Exchange APIs (Binance, Coinbase, Kraken, etc.)",
                  "Wallet connection (Web3Modal, Ethers.js)",
                  "Vercel",
                  "Tailwind CSS",
                  "TypeScript",
                  "Zod (validation)",
                  "Puppeteer (scrape exchange data when APIs limited)"
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
                  title: "Problem Discovery (20 interviews)",
                  desc: "Interview crypto investors on Reddit (r/CryptoCurrency, r/Bitcoin), Twitter crypto communities, and Discord groups. Ask: How do you track your portfolio? How do you do taxes? What's the most painful part?"
                },
                {
                  week: "Week 2",
                  title: "Landing Page Test",
                  desc: "Build page: Your crypto portfolio, optimized. Real-time tracking across all exchanges. AI-powered tax reporting and diversification guidance. Drive 500 visitors via crypto Twitter ads + €100 Reddit ads. Target: 3% signup."
                },
                {
                  week: "Week 3",
                  title: "Pre-Sell",
                  desc: "Offer early-bird lifetime deal: $149 lifetime (50 users). Stripe payment link. Target: 5-10 pre-orders. If <3, the pain isn't strong enough."
                },
                {
                  week: "Week 4",
                  title: "Scope MVP",
                  desc: "Interview pre-orders. Find the ONE feature they'll pay for. Scope: Exchange connection (top 5) + portfolio dashboard + basic tax report. 10-14 week build."
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
              <CardDescription>Dogfood on own crypto portfolio, then expand</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              {[
                "Connect own exchange accounts and wallets to MVP",
                "Track own portfolio and use AI suggestions for rebalancing",
                "Generate own tax report at end of tax season",
                "Collect testimonials from users who got their taxes done faster",
                "Expand to more exchanges/wallets based on user demand"
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
                      <TableHead className="w-[30%]">CoinTracker / Koinly</TableHead>
                      <TableHead className="w-[30%]">This Idea</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {[
                      ["Unified Portfolio View", "Yes (tracking)", "✅ Tracking + AI optimization"],
                      ["Tax Reporting", "Yes (full tax)", "✅ Tax + loss harvesting suggestions"],
                      ["DeFi Tracking", "Limited", "✅ Full DeFi + staking + LPs"],
                      ["Diversification AI", "No", "✅ AI portfolio analysis + targets"],
                      ["Smart Alerts", "Basic price alerts", "✅ AI-powered portfolio alerts"],
                      ["Multi-Country Tax", "Yes (50+)", "✅ Yes + local optimization tips"]
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
                  risk: "Exchange API access is volatile",
                  mitigation: "Start with top 5 exchanges (Binance, Coinbase, Kraken, KuCoin, OKX). Have fallback scraping for smaller exchanges. Build a modular connector system."
                },
                {
                  risk: "Regulatory risk around crypto tax tools",
                  mitigation: "Partner with tax professionals in each country. Don't give legal advice — generate reports that users give to their accountants. Clear disclaimers."
                },
                {
                  risk: "Crypto winter reduces user base",
                  mitigation: "Portfolio tracking is MORE valuable in bear markets (tracking losses, tax loss harvesting). Positioning as a co-pilot works in all market conditions."
                },
                {
                  risk: "CoinTracker/Koinly add AI features",
                  mitigation: "They're tax-first, tracking-second. AI optimization + diversification + smart alerts is a different product. Move fast."
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