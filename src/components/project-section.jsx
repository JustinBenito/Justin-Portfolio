import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import Projects from "./projects"

const ProjectSection = () => {
  const [repos, setRepos] = useState();
  useEffect(()=>{
    getRepos();
  }, [])

  async function getRepos(){
    const response=await fetch('https://api.github.com/users/justinbenito/repos', {
      method: "GET",
    }).then(res => res.json());
    setRepos(response)
  }

  return (
  <div className='w-full bg-white '>
    <h1 className='text-black font-bold uppercase text-4xl mx-auto flex justify-center py-8'>My Projects</h1>
    <p className='text-gray-400 mx-auto flex justify-center text-xl'>Fetched directly from Github API</p>
    <div className='justify-center space-y-4  md:space-y-0 py-4 grid gap-4 max-w-[1240px] mx-auto md:grid-cols-3 place-items-center p-2 '>
  {
    repos?.length>0 ? repos.map(repo=>{
      return <div>
      <Projects repo={repo}/>
      </div>
    }) : <div>Loading...</div>
  }
    </div>
    </div>
  )
}

export default ProjectSection