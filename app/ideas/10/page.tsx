"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { CheckCircle, XCircle, Globe } from "lucide-react";
import Link from "next/link";

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
        {/* Idea Information */}
        <h1 className="text-3xl font-bold tracking-tight">Automated Peppol e-invoicing compliance agent for EU cross-border freelancers</h1>
        <div className="flex items-start gap-3 mb-4">
          <Badge variant="outline" className="text-xs">Category</Badge>
          <span>Finance / Compliance</span>
        </div>
        <Card>
          <CardHeader>
            <CardTitle>A GDPR-compliant, automated agent that ensures invoices meet Peppol standards.</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>A tool connecting to existing invoicing software, minimizing payment delays by validating outgoing invoices against Peppol standards for EU freelancers.</CardDescription>
          </CardContent>
          <CardFooter>
            <Link href="/ideas/10">
              <Button variant="outline" className="w-full">View Detailed Analysis</Button>
            </Link>
          </CardFooter>
        </Card>
      </main>
    </div>
  );
}