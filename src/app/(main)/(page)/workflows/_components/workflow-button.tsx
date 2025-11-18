'use client'
import React from 'react'
import { Button } from '@/components/UI/button'
import { PlusIcon } from 'lucide-react'
import { useModal } from '@/provider/modal-provider'
import CustomModal from '@/components/global/custom-modal'
import WorkflowForm from '@/components/forms/workflow-form'

const WorkflowButton = () => {
const {setOpen,setClose } = useModal()
const handleClick = () => {
    setOpen(
        <CustomModal
        title = 'Create Workflow Automation'
        subheading = 'WorkFlow helps you automate the tasks'>
            <div>Workflow content goes here</div>
            <WorkflowForm title = 'Create Workflow Automation' subTitle = 'WorkFlow helps you automate the tasks' />
        </CustomModal>
    )
}

  return (
    <Button size = {'icon'} onClick = {handleClick}>
   <PlusIcon className = 'w-4 h-4' />
    </Button>
  )
}

export default WorkflowButton
