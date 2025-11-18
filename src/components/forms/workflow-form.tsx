import { WorkflowFormSchema } from '@/lib/types'
import React from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { useRouter } from 'next/navigation'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../UI/card'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '../UI/form'
import { Input } from '../UI/input'

type props = {
    title: string       
    subTitle: string

} 

const WorkflowForm = ({subTitle, title}: props) => {
const form = useForm<z.infer<typeof WorkflowFormSchema>>({
    resolver: zodResolver(WorkflowFormSchema),
    mode: 'onChange',
    defaultValues: {
        name: '',
        description: '',
    },
})

const isLoading = form.formState.isSubmitting
const router = useRouter()

const onSubmit = (data: z.infer<typeof WorkflowFormSchema>) => {
    console.log(data)
}

    return (
        <Card className = 'w-full max-w-[650px] border-none'>
            { title && subTitle && (
                <CardHeader>
                    <CardTitle>{title}</CardTitle>
                    <CardDescription>{subTitle}</CardDescription>
                </CardHeader>
            )}
            <CardContent>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className = 'flex flex-col gap-4 text-left'>
                        <FormField
                            disabled={isLoading}
                            control={form.control}
                            name="name"
                            render={({field}) => (
                                <FormItem
                                    className = 'flex flex-col gap-2'
                                >
                                    <FormLabel>Name</FormLabel>
                                    <FormControl>
                                        <Input 
                                            {...field} 
                                            placeholder = 'Enter the name of the workflow'
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </form>
                </Form>
            </CardContent>
        </Card>
    )
}

export default WorkflowForm