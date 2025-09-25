"use client";
import { useIsMobile } from "@/hooks/use-mobile";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle
} from "@/components/ui/dialog";
import { 
    Drawer,
    DrawerContent,
    DrawerHeader,
    DrawerTitle,
    DrawerDescription

 } from "./ui/drawer";

 interface ResponsiveDialogProps {
 title: string;
 description?: string;
 open: boolean;
 onOpenChange: (open: boolean) => void;
 children: React.ReactNode;
};

export const ResponsiveDialog = ({
    title, description, open, onOpenChange, children
}: ResponsiveDialogProps) => {
    const isMobile = useIsMobile();
    if (isMobile) { 
        return (
            <Drawer open={open} onOpenChange={onOpenChange}>
                <DialogContent>
                        <DrawerHeader>
                            <DrawerTitle>{title}</DrawerTitle>
                            <DrawerDescription>{description}</DrawerDescription>
                        </DrawerHeader>
                        <div className="p-4">
                            {children}
                        </div>
                </DialogContent>
            </Drawer>
        )
    } else {
    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>{title}</DialogTitle>
                    <DialogDescription>{description}</DialogDescription>
                </DialogHeader>
                {children}
            </DialogContent>
        </Dialog>
    );
}

 }