import { supabase } from "@/libs/supabase";
import HomeView, { Project } from "@/views/Home";
import { notFound } from "next/navigation";

export const revalidate = Number(process.env.NEXT_REVALIDATE_INTERVAL??0);
export default async function Home() {
  const { data:projects, error:errProject } = await supabase.from("projects").select('id,name,description,redirect_link,color,project_images(image)').order('sequence');
  const {data:about, error:errAbout} = await supabase.from("about").select("*").limit(1).single();

  if (errAbout || errProject) {
    notFound();
  }

  return <HomeView projects={projects as Project[]} about={about}/>
}
