'use client'

import { Button } from '@/components/UI/button'
import {useNodeConnectiom} from '@/provider/editor-provider'
import { useEditor } from '@/provider/editor-provider'
import { usePathname } from 'next/navigation'
import { useCallback, useEffect, useState } from 'react'
import { onCreateNodeEdges } from '../_actions/workflow-connection'
import { toast } from 'sonner'

type Props = {
    children: React.ReactNode
    edges: any[]
    nodes: any[]
}

const FlowInstance = (props: Props) => {
const pathname = usePathname()
const [isFlow , setisFlow] = useState([])
const {nodeConnection} = useNodeConnectiom()

const onFlowAutomation = useCallback(async () => {
    const flow = await onCreateNodeEdges(
        pathname.split('/').pop()!,
        JSON.stringify(nodes),
        JSON.stringify(edges),
        JSON.stringify(isFlow),
        pathname,
    )

    if (flow) toast.success(flow.message)
}, [nodeConnection])

const onPublishWorkflow = useCallback(async () => {
    const response = await onFlowPublish(pathname.split('/').pop()!, true)
    if(response) toast.success(response.message)
}, [])

return (
    <div className = 'flex flex-col gap-2'>
        <div className = 'flex gap-3 p-4'>
            <Button
            onClick = {onFlowAutomation}
            disabled = {isFlow.length < 1}
            >
                save
            </Button>
            <Button
            onClick = {onPublishWorkflow}
            disabled = {isFlow.length < 1}
            >
                Publish
            </Button>
        </div>
        {children}
    </div>
)

}

export default FlowInstance
