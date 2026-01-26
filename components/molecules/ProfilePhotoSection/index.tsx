import React from 'react';
import ProfilePhoto from '@/components/atoms/ProfilePhoto';
import { Button } from '@/components/ui/button';
import { Camera } from 'lucide-react';

const ProfilePhotoSection = () => {
    return (
        <div className="bg-card text-card-foreground rounded-lg p-6 border shadow-sm">
            <h2 className="text-lg font-semibold mb-1">Profile Photo</h2>
            <p className="text-sm text-muted-foreground mb-6">Upload a profile picture</p>

            <div className="flex items-center gap-6">
                <ProfilePhoto
                    src="/placeholder-avatar.jpg"
                    size={80}
                    className="ring-2 ring-background shadow-md"
                />

                <div className="flex flex-col gap-2">
                    <Button variant="outline" className="w-fit gap-2">
                        <Camera size={16} />
                        Change Photo
                    </Button>
                    <p className="text-xs text-muted-foreground">
                        JPG, PNG or GIF. Max 2MB.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ProfilePhotoSection;
