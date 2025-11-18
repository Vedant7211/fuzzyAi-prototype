'use client'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { EditUserProfileSchema } from '@/lib/types'
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from '../UI/form'
import { Input } from '../UI/input'
import { Button } from '../UI/button'
import { Form } from '../UI/form'
import { Loader2 } from 'lucide-react'

type Props = {}     

const ProfileForm = (props: Props) => {
    const [isLoading, setIsLoading] = useState(false)


    const form = useForm<z.infer<typeof EditUserProfileSchema>>({
        mode: 'onChange',
        resolver: zodResolver(EditUserProfileSchema),
        defaultValues: {
            name: '',
            email: '',
        },
    })

  return (
    <Form {...form}>
        <form onSubmit={() => {}} className="flex flex-col gap-6">
            <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                    <FormItem>
                        <FormLabel>Name</FormLabel>
                        <FormControl>
                            <Input {...field} />
                                            </FormControl>
                        <FormMessage />

                    </FormItem>
                )}
            />
            <FormField
                disabled={isLoading}
                control={form.control}
                name="email"
                render={({ field }) => (
                    <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                            <Input {...field} />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}
            />

            <Button type="submit" className="self-start  hover:bg-[#2F006B] hover:text-white"> 
             {  isLoading ? (    
                    <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Saving...
                    </>
                ) : (
                    'Save user settings'
                )
            }
            </Button>

        </form>     
    </Form>


  )
}

export default ProfileForm;
