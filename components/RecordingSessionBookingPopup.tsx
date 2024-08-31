'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { X } from "lucide-react"
import { format } from "date-fns"
import { Calendar as CalendarIcon } from "lucide-react"
import { cn } from "@/lib/utils"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

interface BookingFormProps {
  onClose: () => void;
}

export default function BookingForm({ onClose }: BookingFormProps) {
  const [date, setDate] = useState<Date>()
  const [isOpen, setIsOpen] = useState(true)

  if (!isOpen) return null


  return (
    <div className="fixed inset-0 bg-background/80 backdrop-blur-sm flex items-center justify-center p-4">
      <Card className="w-full max-w-lg">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-2xl font-bold">Book a Session</CardTitle>
          <Button variant="ghost" size="icon" onClick={() => { setIsOpen(false); onClose(); }}>
            <X className="h-4 w-4" />
          </Button>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="date">Date</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant={"outline"}
                      className={cn(
                        "w-full justify-start text-left font-normal",
                        !date && "text-muted-foreground"
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {date ? format(date, "PPP") : <span>Pick a date</span>}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar
                      mode="single"
                      selected={date}
                      onSelect={setDate}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="time">Time</Label>
                <Input id="time" type="time" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="session-type">Session Type</Label>
                <Select>
                  <SelectTrigger id="session-type">
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent position="popper">
                    <SelectItem value="vocal">Vocal Recording</SelectItem>
                    <SelectItem value="instrument">Instrument Recording</SelectItem>
                    <SelectItem value="mixing">Mixing Session</SelectItem>
                    <SelectItem value="mastering">Mastering Session</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline" onClick={() => { setIsOpen(false); onClose(); }}>Cancel</Button>
          <Button onClick={() => alert('Booking submitted!')}>Book Session</Button>
        </CardFooter>
      </Card>
    </div>
  )
}