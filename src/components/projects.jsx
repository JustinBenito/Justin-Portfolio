import React from 'react'

const Projects = ({repo}) => {


  return (
    <div class="max-w-sm rounded overflow-hidden border-solid border-2 border-gray-100" >
    <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">{repo.name}</div>
        <p class="text-gray-700 text-base">{repo.description}</p>
    </div>
  <div class="px-6 pt-4 pb-2">
  {
    repo?.topics ? repo.topics.map(topic=>{
      return <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{topic}</span>
    }) : <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#ignore</span>
  }
    
    
  </div>
</div>

  )
}

export default Projects