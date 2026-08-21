import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { ArrowRight, Plus, Eye, Bookmark } from "lucide-react";

interface Idea {
  id: string;
  title: string;
  description: string;
  date: string;
  tags: string[];
  detailUrl: string | null;
  featured: boolean;
}

const sampleIdeas: Idea[] = [
  {
    id: "1",
    title: "Testimonial Widget for EU Freelancers",
    description: "A GDPR-compliant, no-code testimonial collection and display tool tailored for freelancers and agencies in Italy, Germany, and Austria. Features EU-hosted data, localized collection flows (Italian/German), compliance linking to FatturaPA/E-Rechnung, and VAT-compliant billing.",
    date: "2025-08-21",
    tags: ["Social Proof", "EU Compliance", "GDPR", "Freelancers"],
    detailUrl: "/ideas/1",
    featured: true
  },
  {
    id: "2",
    title: "AI-Powered Resume Builder",
    description: "An AI tool that automatically creates professional resumes based on user input and job descriptions. Features include ATS optimization, customizable templates, and instant feedback on content quality.",
    date: "2025-08-21",
    tags: ["AI", "Career", "ATS"],
    detailUrl: null,
    featured: false
  },
  {
    id: "3",
    title: "Remote Team Knowledge Base",
    description: "A decentralized knowledge base specifically designed for remote teams. Features include structured documentation, searchable content, and integration with popular development tools.",
    date: "2025-08-21",
    tags: ["Remote Work", "Documentation", "Team Tools"],
    detailUrl: null,
    featured: false
  },
  {
    id: "4",
    title: "Cryptocurrency Portfolio Tracker",
    description: "Real-time tracking of crypto assets with portfolio optimization recommendations. Includes price alerts, tax reporting, and diversification suggestions.",
    date: "2025-08-21",
    tags: ["Crypto", "Finance", "Portfolio"],
    detailUrl: null,
    featured: false
  }
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-medium mb-6">
              <span className="text-sm">daily-saas-ideas</span>
            </div>
            <h1 className="text-4xl font-bold tracking-tight mb-4">Daily SaaS Ideas Collection</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Validated Micro-SaaS Concepts for Solo Founders — Research-backed ideas with revenue data, build plans, and compliance analysis
            </p>
          </div>
        </div>
      </header>

      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Ideas Grid */}
          <div>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold">Ideas ({sampleIdeas.length})</h2>
              <Badge variant="secondary" className="text-sm">
                Updated {new Date().toLocaleDateString()}
              </Badge>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {sampleIdeas.map((idea) => (
                <Card key={idea.id} className={idea.featured ? "ring-2 ring-primary/50 border-primary/20" : ""}>
                  <CardHeader>
                    <div className="flex items-start justify-between gap-2">
                      <div className="flex-1">
                        {idea.featured && (
                          <Badge variant="default" className="mb-2 text-xs">
                            <span className="mr-1">✨</span> Featured
                          </Badge>
                        )}
                        <CardTitle className="text-lg">{idea.title}</CardTitle>
                      </div>
                    </div>
                    <CardDescription className="text-base">{idea.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {idea.tags.map((tag) => (
                        <Badge key={tag} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="flex flex-col gap-3 pt-4">
                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <span>Added: {idea.date}</span>
                      <div className="flex items-center gap-4">
                        <span className="flex items-center gap-1">
                          <Eye className="h-3.5 w-3.5" />
                          {Math.floor(Math.random() * 100)}
                        </span>
                        <span className="flex items-center gap-1">
                          <Bookmark className="h-3.5 w-3.5" />
                          {Math.floor(Math.random() * 50)}
                        </span>
                      </div>
                    </div>
                    {idea.detailUrl && (
                      <Link href={idea.detailUrl}>
                        <Button variant="outline" className="w-full justify-between">
                          View Detailed Analysis
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                    )}
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>

          {/* Footer */}
          <Separator />
          <div className="text-center text-sm text-muted-foreground py-4">
            <p>Built with Next.js, shadcn/ui, and deployed on Vercel</p>
            <p className="mt-1">
              <Link href="https://github.com/chrpan/daily-saas-ideas" className="underline hover:text-foreground" target="_blank" rel="noopener noreferrer">
                View on GitHub
              </Link>
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}