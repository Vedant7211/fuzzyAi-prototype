import React from 'react'

type Props = {
  params: Promise<{ editorId: string }>
}

const EditorPage = async ({ params }: Props) => {
  const { editorId } = await params
  return (
    <div className='h-full'>
      <p>Editor for workflow: {editorId}</p>
    </div>
  )
}

export default EditorPage