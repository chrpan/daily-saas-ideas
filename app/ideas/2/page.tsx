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
          <span className="font-medium">Idea #2</span>
        </div>

        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <Badge className="text-base px-4 py-1">Idea #2</Badge>
            <Badge variant="outline" className="text-sm">AI / Career Tools</Badge>
          </div>
          <h1 className="text-3xl font-bold tracking-tight mb-2">AI-Powered Resume Builder</h1>
          <p className="text-lg text-muted-foreground">
            An AI tool that creates professional, ATS-optimized resumes from user input and job descriptions
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
          {[
            { label: "Category", value: "AI / Career Tools" },
            { label: "Target Market", value: "Job Seekers, Career Coaches" },
            { label: "Pricing Model", value: "$15-49/mo" },
            { label: "Build Time", value: "6-8 weeks" },
            { label: "Reference", value: "Teal ($3M ARR)" },
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
              <CardTitle className="text-xl">Job Seekers Struggle with Resumes</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Job seekers waste hours on resumes that never get interviews. Current tools are outdated, manual, or overpriced. The core problems:
              </p>
              <div className="space-y-3">
                {[
                  { title: "ATS rejection without feedback", desc: "80% of resumes rejected by ATS before a human sees them. Candidates get zero feedback on what went wrong." },
                  { title: "Generic templates don't work", desc: "Most resume builders use the same overused templates that hiring managers instantly recognize and ignore." },
                  { title: "Writer's block on content", desc: "People don't know how to articulate their achievements. 'Responsible for sales' vs 'Boosted sales 40% in 6 months'." },
                  { title: "Job-specific tailoring is tedious", desc: "Customizing a resume for each application takes 30+ minutes. Most candidates don't do it, hurting their chances." }
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
                    The resume is not a document anymore—it's a conversion funnel. Every word must serve two audiences: the ATS algorithm and the human hiring manager. AI is uniquely suited to optimize for both simultaneously.
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
              <CardTitle className="text-xl">AI Resume Builder with ATS Intelligence</CardTitle>
              <CardDescription>An AI-powered tool that generates ATS-optimized, personalized resumes from minimal input and specific job descriptions</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {[
                  {
                    icon: <Globe className="h-5 w-5" />,
                    title: "Job-Embedded Analysis",
                    desc: "Paste any job description → AI extracts key skills, keywords, and company culture signals → resume is optimized to match"
                  },
                  {
                    icon: <Shield className="h-5 w-5" />,
                    title: "ATS Score & Simulator",
                    desc: "Real-time ATS compatibility score (0-100). Shows which sections are weak, which keywords are missing, and predicted ranking"
                  },
                  {
                    icon: <Users className="h-5 w-5" />,
                    title: "Achievement Heuristics",
                    desc: "AI suggests stronger bullet points: 'Improved sales' → 'Grew ARR from $200K to $280K (40% YoY) by leading outbound team'"
                  },
                  {
                    icon: <DollarSign className="h-5 w-5" />,
                    title: "Template Intelligence",
                    desc: "Not generic templates. AI picks the optimal format based on your industry, seniority, and target role. Tech? Clean single-column. Executive? Multi-column with summary"
                  },
                  {
                    icon: <CheckCircle className="h-5 w-5" />,
                    title: "Track Application Outcomes",
                    desc: "Log where you apply, track interviews/responses. AI learns which resume versions get callbacks and suggests improvements"
                  },
                  {
                    icon: <Tag className="h-5 w-5" />,
                    title: "Cover Letter Sync",
                    desc: "Auto-generate matching cover letter from the same job description. Consistent narrative between resume and letter"
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
                    <span><strong>Teal</strong> (AI resume builder)</span>
                    <span className="font-mono">$3M ARR</span>
                  </li>
                  <li className="flex justify-between">
                    <span><strong>Rezi</strong> (ATS-optimized resumes)</span>
                    <span className="font-mono">$2M ARR</span>
                  </li>
                  <li className="flex justify-between">
                    <span><strong>Resume Worded</strong> (feedback scores)</span>
                    <span className="font-mono">$1.2M ARR</span>
                  </li>
                  <li className="flex justify-between">
                    <span><strong>CareerRocket</strong> (niche players)</span>
                    <span className="font-mono">$500K ARR</span>
                  </li>
                  <li className="flex justify-between">
                    <span><strong>Career tools category</strong> (mid-tier)</span>
                    <span className="font-mono">$50K-200K MRR</span>
                  </li>
                </ul>
              </div>

              <Separator />

              <div>
                <h3 className="text-lg font-semibold mb-4">Why This Works</h3>
                <div className="space-y-3">
                  {[
                    {
                      title: "Massive TAM",
                      desc: "160M job seekers in US/EU annually. Even 1% conversion at $29/mo = $55M ARR potential"
                    },
                    {
                      title: "Pain-driven purchase",
                      desc: "Job seekers are highly motivated buyers when they're unemployed or underemployed. Willing to pay for perceived edge"
                    },
                    {
                      title: "Viral network effects",
                      desc: "Every premium user has 50+ contacts who see their polished LinkedIn/profile. Some upgrade to match"
                    },
                    {
                      title: "Low CAC via content",
                      desc: "SEO content around 'how to beat ATS', ' ATS resume format', 'XY company interview tips' drives organic traffic"
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
              <CardDescription>$15-49/mo with a focus on volume (job seekers are price-sensitive)</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-3">
                {[
                  {
                    name: "Basic",
                    price: "$15/mo",
                    desc: "1 resume, basic templates, AI suggestions, ATS score",
                    features: ["1 resume", "Basic templates", "AI bullet suggestions", "ATS score (basic)"],
                    popular: false
                  },
                  {
                    name: "Pro",
                    price: "$29/mo",
                    desc: "Unlimited resumes, job-specific tailoring, ATS simulator, interview tracking",
                    features: ["Unlimited resumes", "Job-specific tailoring", "ATS simulator", "Application tracker", "Cover letter sync"],
                    popular: true
                  },
                  {
                    name: "Career Bundle",
                    price: "$49/mo",
                    desc: "Everything in Pro + LinkedIn profile optimization, salary negotiation scripts, career coaching AI",
                    features: ["LinkedIn optimization", "Salary negotiation AI", "Career coach chat", "Priority support", "Resume A/B testing"],
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
                7-day free trial, no credit card required.
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
              <CardTitle className="text-xl">AI-Native Stack</CardTitle>
              <CardDescription>AI-first architecture with LLM integration for resume generation and optimization</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {[
                  "Next.js 14 (App Router)",
                  "Supabase (PostgreSQL + Auth)",
                  "OpenAI / Claude (LLM for resume generation)",
                  "Vercel (Vercel AI SDK)",
                  "Tailwind CSS",
                  "TypeScript",
                  "Zod (validation)",
                  "React PDF (resume download)"
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
                  desc: "Interview job seekers on LinkedIn, Reddit (r/resumes, r/jobsearch), and university career centers. Ask: How long did your last job search take? Did you use a resume tool? What frustrated you?"
                },
                {
                  week: "Week 2",
                  title: "Landing Page Test",
                  desc: "Build page with value prop: Beat ATS filters, get 2x interviews. AI generates optimized, tailored resumes in minutes. Drive traffic via SEO content + €50 LinkedIn ads targeting 'job seeker' + 'career change' keywords. Target: 200 visitors."
                },
                {
                  week: "Week 3",
                  title: "Pre-Sell with Waitlist",
                  desc: "Offer early-bird lifetime deal: $99 lifetime (50 users). Stripe payment link. Target: 10-15 pre-orders. If <5, the pain isn't strong enough."
                },
                {
                  week: "Week 4",
                  title: "Scope MVP",
                  desc: "Interview pre-orders. Find the ONE feature they'll pay for. Scope: Resume generation from input + job description + ATS score. 6-8 week build."
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
              <CardDescription>Dogfood on own job applications, then expand</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              {[
                "Build MVP and use it for every job application for 3 months",
                "Track interview rates before vs after using the tool",
                "Collect testimonials from users who got jobs",
                "Iterate based on which features actually improve interview rates",
                "Expand to cover letters, LinkedIn profiles, and career coaching"
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
                      <TableHead className="w-[30%]">Teal / Rezi</TableHead>
                      <TableHead className="w-[30%]">This Idea</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {[
                      ["Job-Specific Tailoring", "Manual input", "✅ AI extraction from JD"],
                      ["ATS Simulator", "Basic score", "✅ Detailed breakdown + fix suggestions"],
                      ["Achievement Rewriting", "Template library", "✅ AI-generated bullet improvements"],
                      ["Outcome Tracking", "No", "✅ Application-to-interview analytics"],
                      ["LinkedIn Sync", "No", "✅ Auto-generate matching profile"],
                      ["Career Coaching", "Paid add-on", "✅ Built-in AI coach"]
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
                  risk: "AI hallucinates on resume content",
                  mitigation: "Add human review step + hallucination guardrails. Only rewrite user's actual experience, never invent facts"
                },
                {
                  risk: "Saturated market",
                  mitigation: "Teal/Rezi are generic. AI-specific tailoring + outcome tracking + behavioral analytics is different enough"
                },
                {
                  risk: "Free alternatives exist",
                  mitigation: "$15/mo is below the pain threshold. Career coaching AI is worth more than the price of admission"
                },
                {
                  risk: "Users churn after getting a job",
                  mitigation: "Productize for career growth (LinkedIn optimization, salary negotiation) — becomes career management tool, not just job search"
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