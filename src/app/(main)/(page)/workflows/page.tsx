import React from 'react'
import WorkflowButton from './_components/workflow-button'
import Workflow from './_components/workflow'

const workflows = () => {
  return (
    <div className = 'flex flex-col gap-4'>
              <h1 className="text-4xl sticky top-0 z-[10] p-6 bg-background/50 backdrop-blur-lg flex items-center border-b">
              <span>Workflows</span>
    </h1>
    <div className = 'flex flex-col gap-10 p-6'>
        <div>
            <h2 className = 'text-2xl font-bold'>Workflows</h2>
            <p className="text-base text-white/50">
                Add or update your profile information</p>
        </div>
        <WorkflowButton />  
        <Workflow name = 'Workflow 1' description = 'Workflow 1 description' id = '1' publish = {true} />
        <Workflow name = 'Workflow 2' description = 'Workflow 2 description' id = '2' publish = {false} />
        <Workflow name = 'Workflow 3' description = 'Workflow 3 description' id = '3' publish = {true} />
        <Workflow name = 'Workflow 4' description = 'Workflow 4 description' id = '4' publish = {false} />
        <Workflow name = 'Workflow 5' description = 'Workflow 5 description' id = '5' publish = {true} />
        <Workflow name = 'Workflow 6' description = 'Workflow 6 description' id = '6' publish = {false} />
        <Workflow name = 'Workflow 7' description = 'Workflow 7 description' id = '7' publish = {true} />
        <Workflow name = 'Workflow 8' description = 'Workflow 8 description' id = '8' publish = {false} />
    </div>
    </div>
  )
}
export default workflows
