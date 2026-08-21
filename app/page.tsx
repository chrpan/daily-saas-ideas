"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Link from "next/link";
import { ArrowRight, Plus, Eye, Bookmark, Search, Filter, DollarSign, Clock } from "lucide-react";
import { useState, useMemo } from "react";

interface Idea {
  id: string;
  title: string;
  description: string;
  date: string;
  tags: string[];
  detailUrl: string | null;
  featured: boolean;
  estimatedMRR: string;
  buildTime: string;
  pricing: string;
  targetMarket: string;
  category: string;
}

const sampleIdeas: Idea[] = [
  {
    id: "1",
    title: "Testimonial Widget for EU Freelancers",
    description: "A GDPR-compliant, no-code testimonial collection and display tool tailored for freelancers and agencies in Italy, Germany, and Austria. Features EU-hosted data, localized collection flows (Italian/German), compliance linking to FatturaPA/E-Rechnung, and VAT-compliant billing.",
    date: "2025-08-21",
    tags: ["Social Proof", "EU Compliance", "GDPR", "Freelancers"],
    detailUrl: "/ideas/1",
    featured: true,
    estimatedMRR: "$15-25K",
    buildTime: "4-6 weeks",
    pricing: "€19-99/mo tiered",
    targetMarket: "EU Freelancers & Agencies",
    category: "Social Proof / Conversion"
  },
  {
    id: "2",
    title: "AI-Powered Resume Builder",
    description: "An AI tool that automatically creates professional resumes based on user input and job descriptions. Features include ATS optimization, customizable templates, and instant feedback on content quality.",
    date: "2025-08-21",
    tags: ["AI", "Career", "ATS"],
    detailUrl: null,
    featured: false,
    estimatedMRR: "$5-15K",
    buildTime: "6-8 weeks",
    pricing: "$15-49/mo",
    targetMarket: "Job Seekers, Career Coaches",
    category: "AI / Career Tools"
  },
  {
    id: "3",
    title: "Remote Team Knowledge Base",
    description: "A decentralized knowledge base specifically designed for remote teams. Features include structured documentation, searchable content, and integration with popular development tools.",
    date: "2025-08-21",
    tags: ["Remote Work", "Documentation", "Team Tools"],
    detailUrl: null,
    featured: false,
    estimatedMRR: "$10-30K",
    buildTime: "8-12 weeks",
    pricing: "$20-79/mo per team",
    targetMarket: "Remote Teams, Startups",
    category: "Team Collaboration"
  },
  {
    id: "4",
    title: "Cryptocurrency Portfolio Tracker",
    description: "Real-time tracking of crypto assets with portfolio optimization recommendations. Includes price alerts, tax reporting, and diversification suggestions.",
    date: "2025-08-21",
    tags: ["Crypto", "Finance", "Portfolio"],
    detailUrl: null,
    featured: false,
    estimatedMRR: "$20-50K",
    buildTime: "10-14 weeks",
    pricing: "$19-99/mo",
    targetMarket: "Crypto Investors, Traders",
    category: "FinTech / Crypto"
  }
];

const categories = ["All", "Social Proof / Conversion", "AI / Career Tools", "Team Collaboration", "FinTech / Crypto"];

export default function HomePage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [viewMode, setViewMode] = useState<"table" | "grid">("table");

  const handleCategoryChange = (value: string | null) => {
    if (value) {
      setSelectedCategory(value);
    }
  };

  const filteredIdeas = useMemo(() => {
    return sampleIdeas.filter((idea) => {
      const matchesSearch = idea.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        idea.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        idea.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
      const matchesCategory = selectedCategory === "All" || idea.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-6xl mx-auto text-center">
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
        <div className="max-w-6xl mx-auto space-y-8">
          {/* Controls */}
          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
            <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
              <div className="relative w-full sm:w-72">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input
                  placeholder="Search ideas..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Select value={selectedCategory} onValueChange={handleCategoryChange}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Filter by category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((cat) => (
                    <SelectItem key={cat} value={cat}>{cat}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="flex gap-2">
              <Button
                variant={viewMode === "table" ? "default" : "outline"}
                size="icon"
                onClick={() => setViewMode("table")}
                aria-label="Table view"
              >
                <table className="h-4 w-4" />
              </Button>
              <Button
                variant={viewMode === "grid" ? "default" : "outline"}
                size="icon"
                onClick={() => setViewMode("grid")}
                aria-label="Grid view"
              >
                <div className="h-4 w-4 grid grid-cols-2 gap-1">
                  <div className="bg-muted rounded" />
                  <div className="bg-muted rounded" />
                  <div className="bg-muted rounded" />
                  <div className="bg-muted rounded" />
                </div>
              </Button>
            </div>
          </div>

          {/* Table View */}
          {viewMode === "table" && (
            <Card>
              <CardContent className="p-0">
                <Table>
                    <TableHeader>
                      <TableRow className="border-b">
                        <TableHead className="w-[30%]">Idea</TableHead>
                        <TableHead className="w-[14%]">Category</TableHead>
                        <TableHead className="w-[14%]">Est. MRR</TableHead>
                        <TableHead className="w-[12%]">Build Time</TableHead>
                        <TableHead className="w-[14%]">Pricing</TableHead>
                        <TableHead className="w-[16%]">Target Market</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {filteredIdeas.map((idea) => (
                        <TableRow key={idea.id} className="hover:bg-muted/50 transition-colors">
                          <TableCell className="font-medium">
                            <Link href={idea.detailUrl || "#"} className="hover:text-primary transition-colors">
                              {idea.featured && <span className="inline-flex items-center gap-1 mr-2 text-xs"><span className="text-yellow-500">✨</span>Featured</span>}
                              {idea.title}
                            </Link>
                            <div className="text-sm text-muted-foreground mt-1 line-clamp-2 max-w-[320px]">{idea.description}</div>
                          </TableCell>
                          <TableCell>
                            <Badge variant="outline" className="text-xs">{idea.category}</Badge>
                          </TableCell>
                          <TableCell>
                            <span className="font-mono text-primary">{idea.estimatedMRR}</span>
                          </TableCell>
                          <TableCell>
                            <span className="flex items-center gap-1 text-sm">
                              <Clock className="h-3.5 w-3.5 text-muted-foreground" />
                              {idea.buildTime}
                            </span>
                          </TableCell>
                          <TableCell>
                            <span className="font-mono text-green-600 dark:text-green-400">{idea.pricing}</span>
                          </TableCell>
                          <TableCell className="text-sm text-muted-foreground">{idea.targetMarket}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
              </CardContent>
            </Card>
          )}

          {/* Grid View */}
          {viewMode === "grid" && (
            <div>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold">Ideas ({filteredIdeas.length})</h2>
                <Badge variant="secondary" className="text-sm">
                  Updated {new Date().toLocaleDateString()}
                </Badge>
              </div>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {filteredIdeas.map((idea) => (
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
                      {/* Quick metrics */}
                      <div className="grid grid-cols-2 gap-2 mb-4 p-3 bg-muted/50 rounded-lg">
                        <div>
                          <div className="text-xs text-muted-foreground">Est. MRR</div>
                          <div className="font-semibold text-primary">{idea.estimatedMRR}</div>
                        </div>
                        <div>
                          <div className="text-xs text-muted-foreground">Build Time</div>
                          <div className="font-medium flex items-center gap-1">
                            <Clock className="h-3.5 w-3.5" />
                            {idea.buildTime}
                          </div>
                        </div>
                        <div>
                          <div className="text-xs text-muted-foreground">Pricing</div>
                          <div className="font-mono text-green-600 dark:text-green-400 text-sm">{idea.pricing}</div>
                        </div>
                        <div>
                          <div className="text-xs text-muted-foreground">Category</div>
                          <div className="text-sm font-medium">{idea.category}</div>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter className="flex flex-col gap-3 pt-4">
                      <div className="flex items-center justify-between text-sm text-muted-foreground">
                        <span>Added: {idea.date}</span>
                        <Badge variant="outline" className="text-xs">{idea.category}</Badge>
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
          )}

          {filteredIdeas.length === 0 && (
            <div className="text-center py-12">
              <Search className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
              <h3 className="text-lg font-medium mb-2">No ideas found</h3>
              <p className="text-muted-foreground">Try adjusting your search or filter criteria</p>
            </div>
          )}

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