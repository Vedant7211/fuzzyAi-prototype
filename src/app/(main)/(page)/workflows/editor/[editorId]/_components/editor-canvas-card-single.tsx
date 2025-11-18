import { EditorCanvasCardType } from '@/lib/types'
import { useEditor } from '@/provider/editor-provider'
import React, { useMemo } from 'react'
import { Position, useNodeId } from 'reactflow'
import EditorCanvasCardIconHelper from './editor-canvas-card-icon-helper'
import CustomHandle from './custom-handle'
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/UI/card'
import { Badge } from '@/components/UI/badge'
import clsx from 'clsx'

type props = {}

const EditorCanvasCardSingle = ({data}: {data: EditorCanvasCardType}) => {

    const {dispatch , state} = useEditor()
    const nodeId = useNodeId()
    const logo = useMemo(() => {
        return <EditorCanvasCardIconHelper type={data.type} />
    } , [data])



  return (
    <>
      {data.type !== 'Trigger' && data.type !=='Google Drive' && (
        <CustomHandle 
        type = 'target'
        position = {Position.Top}
        style = {{ zIndex: 100 }}
        />
      )}

      <Card
      onClick = {(e) => {
        e.stopPropagation()
        const val = state.editor.elements.find((el) => el.id === nodeId)
        if(val){
            dispatch({type: 'SELECTED_ELEMENT' , payload: {element: val}}
            )
        }
      }}
      className = 'realtive max-w-[400px] dark:border-muted-foreground/70'>
        <CardHeader className = 'flex flex-row items-center gap-4'>
            <div> {logo}</div>
            <CardTitle className = 'text-md'>{data.title}</CardTitle>
            <CardDescription>
                <p className = 'text-xs text-muted-foregroud/50'>
                <b className = 'text-muted-foreground/80'>ID: </b>
                {nodeId}
                </p>        
            <p> {data.description}</p>
            </CardDescription>
        </CardHeader>
        <Badge variant= 'secondary' className = 'absolute top-2 right-2'>
            {data.type}
        </Badge>
        <div
        className={clsx('absolute left-3 top-4 h-2 w-2 rounded-full', {
            'bg-green-500' : Math.random() > 0.6,
            'bg-red-500' : Math.random() >= 0.8,
            'bg-orange-500' : Math.random() >= 0.6 && Math.random() < 0.8,
        })}
        > </div>

      </Card>
     
    </>
  )
}

export default EditorCanvasCardSingle


