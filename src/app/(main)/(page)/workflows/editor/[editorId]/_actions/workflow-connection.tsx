'use server'

import { db } from '@/lib/db'


export const onCreateNodeEdges = async (
    flowId: string,
    nodes : string, 
    edges : string,
    flowPath : string,
) => {
    const flow = await db.workflows.update({
        where: {
            id: flowId,
        },
        data: {
            nodes: nodes,
            edges: edges,
            flowPath: flowPath,
        },
    })

    if (flow) return {message: 'Flow created successfully'}
}


export const onFlowPublish = async (
    workflowId: string,
    state: any,
) => {
    console.log(state)
    const published = await db.workflows.update({
        where: {id: workflowId},
        data: { 
            publish: state},
    })

    if(published.publish) return {message: 'Workflow published successfully'}
    return {message: 'Workflow not published'}
}