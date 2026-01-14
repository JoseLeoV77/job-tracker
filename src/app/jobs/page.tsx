import JobCard from "@/components/JobCard";

async function getJobs() {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  
  if (Math.random() > 0.5) throw new Error("Database connection failed!");
  
  return [
    { id: 1, title: "Senior Next.js Engineer", company: "Vercel", location: "Remote" },
    { id: 2, title: "Fullstack Developer", company: "Supabase", location: "Remote" },
  ];
}

export default async function JobsPage() {
  const jobs = await getJobs();

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Available Jobs</h1>
      <div className="grid gap-4">
        {jobs.map((job) => (
          <JobCard key={job.id} job={job} />
        ))}
      </div>
    </div>
  );
}