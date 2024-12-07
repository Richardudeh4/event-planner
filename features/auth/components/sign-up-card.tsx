"use client";
import {z} from "zod";
import DottedSeparator from '@/components/dotted-separator'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import {FcGoogle} from "react-icons/fc";
import {FaGithub} from "react-icons/fa";
import { Separator } from '@/components/ui/separator'
import React from 'react'
import Link from 'next/link';
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { registerSchema } from "../schema";
import { useMutation } from "@tanstack/react-query";
import { useRegister } from "../api/use-register";



const SignUpCard = () => {
  const {mutate, isPending} = useRegister();
  const form = useForm<z.infer<typeof registerSchema>>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    }
  });
  const onSubmit = (values:z.infer<typeof registerSchema>) => {
   mutate({json: values});
  }
  return (
    <Card className='w-full h-full md:w-[487px] border-none shadow-none'>
     <CardHeader className='flex items-center justify-center text-center p-7'>
      <CardTitle className='text-2xl'>Sign Up</CardTitle>
      <CardDescription>
        By signing up, you agree to our{" "} 
        <Link href="/privacy">
        <span className='text-blue-700 hover:underline'>Privacy policy</span>
        </Link>
        {" "}and {" "}
        <Link href="/terms">
        <span className='text-blue-700 hover:underline'>Terms of service</span>{" "}
        </Link>
      </CardDescription>
     </CardHeader>
     <div className='px-7'>
    <DottedSeparator/>
     </div>
     <CardContent className='p-7'>
      <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-4'>
      <FormField
        name="name"
        control={form.control}
        render={({field}) => ( 
          <FormItem>
            <FormControl>
            <Input 
          type="text"
          placeholder='Enter your name'
          {...field  }
          />
            </FormControl>
            <FormMessage/>
          </FormItem>
        
        )}
        />
      <FormField
        name="email"
        control={form.control}
        render={({field}) => ( 
          <FormItem>
            <FormControl>
            <Input 
          type="email"
          placeholder='Enter your email'
          {...field  }
          />
            </FormControl>
            <FormMessage/>
          </FormItem>
        
        )}
        />
      <FormField
        name="password"
        control={form.control}
        render={({field}) => ( 
          <FormItem>
            <FormControl>
            <Input
          type="password"
          placeholder='Enter your password'
          {...field  }
          />
            </FormControl>
            <FormMessage/>
          </FormItem>
        
        )}
        />
      {/* <Input 
    required
    type="text" value={""} onChange={() => {}}
    placeholder='Enter you name'
    disabled={false}
    />
    <Input 
    required
    type="email" value={""} onChange={() => {}}
    placeholder='Enter email address'
    disabled={false}
    />
    <Input 
    required
    type="password" value={""} onChange={() => {}}
    min={8}
    max={256}
    placeholder='Enter your password'
    disabled={false}
    /> */}
   <Button disabled={isPending} size="lg" className='w-full'>Register</Button>
      </form>
      </Form>
     </CardContent>
     <div className='px-7'>
<DottedSeparator/>
     </div>
     <CardContent className='p-7 flex flex-col gap-y-4'>
      <Button variant="secondary" disabled={isPending} size="lg" className='w-full'>
        <FcGoogle className='mr-2 size-5'/>
        Login with Google
      </Button>
      <Button variant="secondary" disabled={isPending} size="lg" className='w-full'>
        <FaGithub className='mr-2 size-5'/>
        Login with Github
      </Button>
     </CardContent>
     <div className="px-7">
      <DottedSeparator/>
     </div>
     <CardContent className="p-7 flex items-center justify-center">
        <p>
          already have an account? {" "}
          <Link href="/sign-in" className="text-blue-500 hover:underline">
          sign in
          </Link>
        </p>
     </CardContent>
    </Card>
  ) 
}

export default SignUpCard;