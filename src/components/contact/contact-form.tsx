'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Upload, X, FileImage } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  phone: z.string().optional(),
  message: z.string().min(10, 'Message must be at least 10 characters'),
})

type ContactFormData = z.infer<typeof contactSchema>

interface UploadedFile {
  id: string
  name: string
  size: number
  type: string
  preview?: string
}

const ContactForm = () => {
  const [uploadedFiles, setUploadedFiles] = useState<UploadedFile[]>([])
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isDragOver, setIsDragOver] = useState(false)

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      message: '',
    },
  })

  const handleFileUpload = (files: FileList | null) => {
    if (!files) return

    const newFiles: UploadedFile[] = []
    
    Array.from(files).forEach((file) => {
      // Validate file type and size
      if (!file.type.startsWith('image/')) {
        alert(`${file.name} is not an image file`)
        return
      }
      
      if (file.size > 10 * 1024 * 1024) { // 10MB limit
        alert(`${file.name} is too large (max 10MB)`)
        return
      }

      const fileId = Date.now().toString() + Math.random().toString(36).substr(2, 9)
      const fileObj: UploadedFile = {
        id: fileId,
        name: file.name,
        size: file.size,
        type: file.type,
      }

      // Create preview for images
      if (file.type.startsWith('image/')) {
        const reader = new FileReader()
        reader.onload = (e) => {
          fileObj.preview = e.target?.result as string
          setUploadedFiles(prev => 
            prev.map(f => f.id === fileId ? { ...f, preview: fileObj.preview } : f)
          )
        }
        reader.readAsDataURL(file)
      }

      newFiles.push(fileObj)
    })

    setUploadedFiles(prev => [...prev, ...newFiles])
  }

  const removeFile = (fileId: string) => {
    setUploadedFiles(prev => prev.filter(f => f.id !== fileId))
  }

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return '0 Bytes'
    const k = 1024
    const sizes = ['Bytes', 'KB', 'MB']
    const i = Math.floor(Math.log(bytes) / Math.log(k))
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i]
  }

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true)
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      const inquiry = {
        ...data,
        id: Date.now().toString(),
        files: uploadedFiles,
        status: 'new' as const,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      }
      
      console.log('Inquiry submitted:', inquiry)
      console.log('Files:', uploadedFiles)
      
      // In a real app, you'd send this to your API
      
      setIsSubmitted(true)
    } catch (error) {
      console.error('Contact form error:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <Card className="max-w-2xl mx-auto shadow-2xl bg-gradient-to-br from-white to-purple-50/50">
        <CardContent className="p-8 text-center">
          <div className="space-y-6">
            <div className="text-6xl animate-bounce">🎉</div>
            <div className="space-y-3">
              <h2 className="text-2xl font-bold font-heading text-primary">
                Got Your Message!
              </h2>
              <p className="text-muted-foreground">
                Thanks for reaching out! I'll text or call you back within a couple hours. 
                If it's urgent, just text me directly at (555) 123-WASH.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button onClick={() => setIsSubmitted(false)} variant="outline">
                Send Another Message
              </Button>
              <Button asChild className="bg-gradient-to-r from-blue-600 to-purple-600">
                <Link href="/booking">Actually, Let's Book Something!</Link>
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
      {/* Contact Information */}
      <Card>
        <CardHeader>
          <CardTitle>Get in Touch</CardTitle>
          <CardDescription>
            Send us a message and we'll respond as soon as possible
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">Name *</Label>
              <Input
                id="name"
                placeholder="Your full name"
                {...form.register('name')}
              />
              {form.formState.errors.name && (
                <p className="text-sm text-destructive">
                  {form.formState.errors.name.message}
                </p>
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email *</Label>
              <Input
                id="email"
                type="email"
                placeholder="your@email.com"
                {...form.register('email')}
              />
              {form.formState.errors.email && (
                <p className="text-sm text-destructive">
                  {form.formState.errors.email.message}
                </p>
              )}
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone">Phone (Optional)</Label>
            <Input
              id="phone"
              type="tel"
              placeholder="(555) 123-4567"
              {...form.register('phone')}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="message">Message *</Label>
            <Textarea
              id="message"
              placeholder="Tell us how we can help you..."
              rows={4}
              {...form.register('message')}
            />
            {form.formState.errors.message && (
              <p className="text-sm text-destructive">
                {form.formState.errors.message.message}
              </p>
            )}
          </div>
        </CardContent>
      </Card>

      {/* File Upload */}
      <Card>
        <CardHeader>
          <CardTitle>Photo Upload (Optional)</CardTitle>
          <CardDescription>
            Upload photos of your car to help us better understand your needs
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* Upload Area */}
          <div
            className={`border-2 border-dashed rounded-lg p-8 text-center transition-colors ${
              isDragOver 
                ? 'border-primary bg-primary/10' 
                : 'border-muted-foreground/25 hover:border-primary/50'
            }`}
            onDragOver={(e) => {
              e.preventDefault()
              setIsDragOver(true)
            }}
            onDragLeave={(e) => {
              e.preventDefault()
              setIsDragOver(false)
            }}
            onDrop={(e) => {
              e.preventDefault()
              setIsDragOver(false)
              handleFileUpload(e.dataTransfer.files)
            }}
          >
            <div className="space-y-4">
              <div className="mx-auto w-12 h-12 bg-muted rounded-full flex items-center justify-center">
                <Upload className="h-6 w-6 text-muted-foreground" />
              </div>
              <div>
                <p className="font-medium">Drop images here or click to upload</p>
                <p className="text-sm text-muted-foreground">
                  PNG, JPG up to 10MB each
                </p>
              </div>
              <Input
                type="file"
                multiple
                accept="image/*"
                onChange={(e) => handleFileUpload(e.target.files)}
                className="hidden"
                id="file-upload"
              />
              <Button
                type="button"
                variant="outline"
                onClick={() => document.getElementById('file-upload')?.click()}
              >
                Choose Files
              </Button>
            </div>
          </div>

          {/* Uploaded Files */}
          {uploadedFiles.length > 0 && (
            <div className="space-y-3">
              <h4 className="font-medium">Uploaded Files</h4>
              <div className="grid gap-3">
                {uploadedFiles.map((file) => (
                  <div
                    key={file.id}
                    className="flex items-center space-x-3 p-3 border rounded-lg"
                  >
                    {file.preview ? (
                      <img
                        src={file.preview}
                        alt={file.name}
                        className="w-12 h-12 object-cover rounded"
                      />
                    ) : (
                      <div className="w-12 h-12 bg-muted rounded flex items-center justify-center">
                        <FileImage className="h-6 w-6 text-muted-foreground" />
                      </div>
                    )}
                    <div className="flex-1 min-w-0">
                      <p className="font-medium truncate">{file.name}</p>
                      <p className="text-sm text-muted-foreground">
                        {formatFileSize(file.size)}
                      </p>
                    </div>
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      onClick={() => removeFile(file.id)}
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Submit Button */}
      <Button
        type="submit"
        size="lg"
        className="w-full"
        disabled={isSubmitting}
      >
        {isSubmitting ? 'Sending Message...' : 'Send Message'}
      </Button>
    </form>
  )
}

export default ContactForm