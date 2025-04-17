"use client"; // This makes it a Client Component

import { Button } from "@/components/ui/button";
import { retakeInterview } from "@/lib/actions/general.action";
export function RetakeButton({ interviewId, userId }: {
    interviewId: string;
    userId: string;
}) {
    return (
        <Button
            onClick={async () => await retakeInterview({ interviewId, userId })}
            className="btn-primary flex-1"
        >
            Retake Interview
        </Button>
    );
}