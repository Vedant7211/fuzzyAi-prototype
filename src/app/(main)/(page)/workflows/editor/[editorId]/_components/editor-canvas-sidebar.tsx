'use client'
import { EditorNodeType } from '@/lib/types'
import { useEditor } from '@/provider/editor-provider'
import { useNodeConnection } from '@/provider/connection-provider'
import React, { useCallback } from 'react'
import { Tabs } from '@/components/UI/tabs'


type Props = {
    nodes: EditorNodeType[]
}


const EditorCanvasSidebar = ({nodes}: Props) => {
    const {state} = useEditor()
    const {nodeConnection} = useNodeConnection()

 
    return <aside> 
        <Tabs defaultValue="action"></Tabs>

    </aside>
}

export default EditorCanvasSidebar