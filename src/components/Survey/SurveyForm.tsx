import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { Textarea } from "@/components/ui/textarea";

const surveySchema = z.object({
  consent: z.boolean().refine((val) => val === true, {
    message: "You must agree to continue",
  }),
  age: z.string().min(1, "Age is required"),
  gender: z.string(),
  visitPurpose: z.string(),
  visitPurposeOther: z.string().optional(),
  discoverySource: z.string(),
  discoverySourceOther: z.string().optional(),
  bookingMethod: z.string(),
  bookingMethodOther: z.string().optional(),
  bookingSatisfaction: z.string(),
  attractions: z.array(z.string()),
  wantsUpdates: z.string(),
  email: z.string().email().optional(),
});

export const SurveyForm = () => {
  const [currentPage, setCurrentPage] = useState(1);
  // Remove this line since it's defined later
  // const totalPages = 5;

  const form = useForm<z.infer<typeof surveySchema>>({
    resolver: zodResolver(surveySchema),
    defaultValues: {
      consent: false,
      attractions: [],
      age: "",
      gender: "",
      visitPurpose: "",
      discoverySource: "",
      bookingMethod: "",
      bookingSatisfaction: "",
      wantsUpdates: "",
      email: "",
    },
  });

  const onSubmit = (data: z.infer<typeof surveySchema>) => {
    console.log("Survey Data:", data);
    alert("Survey submitted successfully!");
  };

  const renderConsent = () => (
    <div className="space-y-6">
      <h3 className="text-xl font-semibold text-center">Welcome to Our Survey!</h3>
      <p className="text-gray-600 text-center">
        Thank you for taking the time to share your feedback! Your responses will help improve tourism.
      </p>

      <FormField
        control={form.control}
        name="consent"
        render={({ field }) => (
          <FormItem>
            <FormControl>
              <div className="flex items-center space-x-2">
                <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                <label className="text-sm text-gray-600">
                  I agree that my feedback may be used for research and improvement.
                </label>
              </div>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );

  const renderDemographics = () => (
    <div className="space-y-4">
      <FormField
        control={form.control}
        name="age"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Age Group</FormLabel>
            <Select onValueChange={field.onChange} defaultValue={field.value}>
              <FormControl>
                <SelectTrigger>
                  <SelectValue placeholder="Select age group" />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                <SelectItem value="18-24">18-24</SelectItem>
                <SelectItem value="25-34">25-34</SelectItem>
                <SelectItem value="35-44">35-44</SelectItem>
                <SelectItem value="45-54">45-54</SelectItem>
                <SelectItem value="55+">55+</SelectItem>
              </SelectContent>
            </Select>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="gender"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Gender</FormLabel>
            <Select onValueChange={field.onChange} defaultValue={field.value}>
              <FormControl>
                <SelectTrigger>
                  <SelectValue placeholder="Select gender" />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                <SelectItem value="male">Male</SelectItem>
                <SelectItem value="female">Female</SelectItem>
                <SelectItem value="other">Other</SelectItem>
                <SelectItem value="prefer-not-to-say">Prefer not to say</SelectItem>
              </SelectContent>
            </Select>
          </FormItem>
        )}
      />
    </div>
  );

  const renderExperience = () => (
    <div className="space-y-6">
      <FormField
        control={form.control}
        name="attractions"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Attractions Visited</FormLabel>
            <FormControl>
              <div className="grid grid-cols-2 gap-4">
                {["Stone Town", "Jozani Forest", "Nungwi Beach", "Prison Island", "Spice Farms"].map((attraction) => (
                  <div key={attraction} className="flex items-center space-x-2">
                    <Checkbox
                      checked={field.value?.includes(attraction)}
                      onCheckedChange={(checked) => {
                        const newValue = checked
                          ? [...(field.value || []), attraction]
                          : field.value?.filter((value) => value !== attraction) || [];
                        field.onChange(newValue);
                      }}
                    />
                    <label>{attraction}</label>
                  </div>
                ))}
              </div>
            </FormControl>
          </FormItem>
        )}
      />
    </div>
  );

  const renderContact = () => (
    <div className="space-y-6">
      <FormField
        control={form.control}
        name="wantsUpdates"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Would you like updates about tourism?</FormLabel>
            <RadioGroup onValueChange={field.onChange} defaultValue={field.value}>
              <FormItem className="flex items-center space-x-2">
                <RadioGroupItem value="yes" />
                <FormLabel>Yes</FormLabel>
              </FormItem>
              <FormItem className="flex items-center space-x-2">
                <RadioGroupItem value="no" />
                <FormLabel>No</FormLabel>
              </FormItem>
            </RadioGroup>
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="email"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Email (optional)</FormLabel>
            <FormControl>
              <Input {...field} placeholder="Enter your email" />
            </FormControl>
          </FormItem>
        )}
      />
    </div>
  );
  // Add this function to get fields for current page
  const getFieldsForPage = (page: number): Array<keyof z.infer<typeof surveySchema>> => {
    switch (page) {
      case 1:
        return ['consent'];
      case 2:
        return ['age', 'gender'];
      case 3:
        return ['attractions'];
      case 4:
        return ['wantsUpdates'];
      default:
        return [];
    }
  };
  // Update the handleNext function
  const handleNext = async () => {
    const currentFields = getFieldsForPage(currentPage);
    const isValid = await form.trigger(currentFields);
    
    if (isValid) {
      setCurrentPage(currentPage + 1);
    }
  };
  // Update the totalPages constant to match actual pages
  const totalPages = 4; // Changed from 5 to match actual number of pages
  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  return (
    <Card>
      <CardHeader className="text-center">
        <h2 className="text-xl font-semibold">Tourism Survey</h2>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            {currentPage === 1 && renderConsent()}
            {currentPage === 2 && renderDemographics()}
            {currentPage === 3 && renderExperience()}
            {currentPage === 4 && renderContact()}

            <div className="flex justify-between pt-4">
              {currentPage > 1 && (
                <Button type="button" variant="outline" onClick={handlePrevious}>
                  Previous
                </Button>
              )}
              
              {currentPage < totalPages ? (
                <Button 
                  type="button" 
                  onClick={handleNext}
                  disabled={currentPage === 1 && !form.getValues().consent}
                  className={currentPage === 1 ? "mx-auto" : "ml-auto"}
                >
                  Next
                </Button>
              ) : (
                <Button type="submit" className="ml-auto">
                  Submit
                </Button>
              )}
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};
