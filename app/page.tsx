"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Link from "next/link";
import { ArrowRight, Plus, Eye, Bookmark, Search, Filter, DollarSign, Clock, ChevronUp, ChevronDown, ArrowUpDown, Tag, Target, TrendingUp } from "lucide-react";
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
    detailUrl: "/ideas/2",
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
    detailUrl: "/ideas/3",
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
    detailUrl: "/ideas/4",
    featured: false,
    estimatedMRR: "$20-50K",
    buildTime: "10-14 weeks",
    pricing: "$19-99/mo",
    targetMarket: "Crypto Investors, Traders",
    category: "FinTech / Crypto"
  },
  {
    id: "5",
    title: "SMB Document-Digestion Agent",
    description: "An AI agent that ingests messy inbound business documents (invoices, supplier price-lists, datasheets, spec sheets, quotes, datasets, EDI) and structures them into the customer's own ERP / proprietary schema. Self-hostable, EU-sovereign, delivered as a service via Steuerberater partners.",
    date: "2026-08-26",
    tags: ["Doc-AI", "Data Ingestion", "EU Sovereign", "Self-Host"],
    detailUrl: "/ideas/5",
    featured: false,
    estimatedMRR: "€5-10K",
    buildTime: "6-8 weeks",
    pricing: "€399-1.2K setup + €19/mo/mapping",
    targetMarket: "EU SMBs, Steuerberater",
    category: "AI / Data Ingestion"
  },
  {
    id: "6",
    title: "Failed-Payment Dunning & Recovery Agent",
    description: "An autonomous agent that detects failed subscription payments, classifies the decline reason (insufficient funds, expired card, hard decline), and runs a localized EU dunning + recovery sequence — retry timing, DE/IT/AT email + WhatsApp nudges, one-click Stripe update link — recovering churned MRR without a human in the loop. Self-serve, EU-hosted, dogfooded on Limeon srl first.",
    date: "2026-08-28",
    tags: ["Dunning", "Payments", "Churn Recovery", "EU SMB", "Self-Serve"],
    detailUrl: "/ideas/6",
    featured: false,
    estimatedMRR: "€3-8K",
    buildTime: "3-4 weeks",
    pricing: "€29-99/mo + 5% recovered",
    targetMarket: "EU subscription SMBs, freelancers",
    category: "AI / Revenue Ops"
  }
];

const categories = ["All", "Social Proof / Conversion", "AI / Career Tools", "Team Collaboration", "FinTech / Crypto", "AI / Data Ingestion", "AI / Revenue Ops"];
const sortOptions = [
  { value: "featured", label: "Featured First" },
  { value: "mrr-desc", label: "Est. MRR (High → Low)" },
  { value: "mrr-asc", label: "Est. MRR (Low → High)" },
  { value: "build-asc", label: "Build Time (Short → Long)" },
  { value: "build-desc", label: "Build Time (Long → Short)" },
  { value: "date-desc", label: "Newest First" },
  { value: "date-asc", label: "Oldest First" },
  { value: "title-asc", label: "Title (A-Z)" },
];

const parseMRR = (mrr: string): number => {
  const match = mrr.match(/\$?([\d.]+)([K]?)/);
  if (!match) return 0;
  const num = parseFloat(match[1]);
  return match[2] === "K" ? num * 1000 : num;
};

const parseBuildTime = (time: string): number => {
  const match = time.match(/(\d+)-?(\d+)?\s*weeks?/);
  if (!match) return 0;
  return match[2] ? parseInt(match[2]) : parseInt(match[1]);
};

export default function HomePage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedTag, setSelectedTag] = useState("All");
  const [sortBy, setSortBy] = useState("featured");
  const [viewMode, setViewMode] = useState<"table" | "grid">("table");
  const [showFilters, setShowFilters] = useState(false);

  const handleCategoryChange = (value: string | null) => {
    if (value) setSelectedCategory(value);
  };

  const allTags = useMemo(() => {
    const tags = new Set<string>();
    sampleIdeas.forEach(idea => idea.tags.forEach(tag => tags.add(tag)));
    return ["All", ...Array.from(tags).sort()];
  }, []);

  const filteredAndSortedIdeas = useMemo(() => {
    let ideas = sampleIdeas.filter((idea) => {
      const matchesSearch = idea.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        idea.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        idea.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
      const matchesCategory = selectedCategory === "All" || idea.category === selectedCategory;
      const matchesTag = selectedTag === "All" || idea.tags.includes(selectedTag);
      return matchesSearch && matchesCategory && matchesTag;
    });

    ideas = [...ideas].sort((a, b) => {
      switch (sortBy) {
        case "featured":
          return b.featured === a.featured ? 0 : b.featured ? 1 : -1;
        case "mrr-desc":
          return parseMRR(b.estimatedMRR) - parseMRR(a.estimatedMRR);
        case "mrr-asc":
          return parseMRR(a.estimatedMRR) - parseMRR(b.estimatedMRR);
        case "build-asc":
          return parseBuildTime(a.buildTime) - parseBuildTime(b.buildTime);
        case "build-desc":
          return parseBuildTime(b.buildTime) - parseBuildTime(a.buildTime);
        case "date-desc":
          return new Date(b.date).getTime() - new Date(a.date).getTime();
        case "date-asc":
          return new Date(a.date).getTime() - new Date(b.date).getTime();
        case "title-asc":
          return a.title.localeCompare(b.title);
        default:
          return 0;
      }
    });

    return ideas;
  }, [searchQuery, selectedCategory, selectedTag, sortBy]);

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
          <div className="space-y-4">
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

            {/* Advanced Filters & Sort */}
            <Button
              variant="outline"
              size="sm"
              onClick={() => setShowFilters(!showFilters)}
              className="w-full sm:w-auto"
            >
              <Filter className="mr-2 h-4 w-4" />
              {showFilters ? "Hide" : "Show"} Filters & Sort
            </Button>

            {showFilters && (
              <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto p-4 bg-muted/30 rounded-lg border">
                <Select value={selectedTag} onValueChange={(v) => v && setSelectedTag(v)}>
                  <SelectTrigger className="w-full sm:w-[180px]">
                    <SelectValue placeholder="Filter by tag" />
                  </SelectTrigger>
                  <SelectContent>
                    {allTags.map((tag) => (
                      <SelectItem key={tag} value={tag}>{tag}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <Select value={sortBy} onValueChange={(v) => v && setSortBy(v)}>
                  <SelectTrigger className="w-full sm:w-[200px]">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    {sortOptions.map((opt) => (
                      <SelectItem key={opt.value} value={opt.value}>{opt.label}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <TrendingUp className="h-4 w-4" />
                  <span>{filteredAndSortedIdeas.length} ideas</span>
                </div>
              </div>
            )}
          </div>

          {/* Table View */}
          {viewMode === "table" && (
            <Card>
              <CardContent className="p-0">
                <Table>
                    <TableHeader>
                      <TableRow className="border-b">
                        <TableHead className="w-[35%]">Idea</TableHead>
                        <TableHead className="w-[13%]">Category</TableHead>
                        <TableHead className="w-[13%]">Est. MRR</TableHead>
                        <TableHead className="w-[11%]">Build Time</TableHead>
                        <TableHead className="w-[13%]">Pricing</TableHead>
                        <TableHead className="w-[15%]">Target Market</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {filteredAndSortedIdeas.map((idea) => (
                        <TableRow key={idea.id} className="hover:bg-muted/50 transition-colors">
                          <TableCell className="font-medium">
                            <Link href={idea.detailUrl || "#"} className="hover:text-primary transition-colors">
                              {idea.title}
                            </Link>
                            <div className="text-sm text-muted-foreground mt-1 line-clamp-3 whitespace-normal">{idea.description}</div>
                          </TableCell>
                          <TableCell className="whitespace-nowrap">
                            <Badge variant="outline" className="text-xs">{idea.category}</Badge>
                          </TableCell>
                          <TableCell className="whitespace-nowrap">
                            <span className="font-mono text-primary">{idea.estimatedMRR}</span>
                          </TableCell>
                          <TableCell className="whitespace-nowrap">
                            <span className="flex items-center gap-1 text-sm">
                              <Clock className="h-3.5 w-3.5 text-muted-foreground" />
                              {idea.buildTime}
                            </span>
                          </TableCell>
                          <TableCell className="whitespace-nowrap">
                            <span className="font-mono text-green-600 dark:text-green-400">{idea.pricing}</span>
                          </TableCell>
                          <TableCell className="whitespace-nowrap text-sm text-muted-foreground">{idea.targetMarket}</TableCell>
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
                <h2 className="text-2xl font-bold">Ideas ({filteredAndSortedIdeas.length})</h2>
                <Badge variant="secondary" className="text-sm">
                  Updated {new Date().toLocaleDateString()}
                </Badge>
              </div>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {filteredAndSortedIdeas.map((idea) => (
                  <Card key={idea.id} className={idea.featured ? "ring-2 ring-primary/50 border-primary/20" : ""}>
                    <CardHeader>
                      <div className="flex items-start justify-between gap-2">
                        <div className="flex-1">
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

          {filteredAndSortedIdeas.length === 0 && (
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