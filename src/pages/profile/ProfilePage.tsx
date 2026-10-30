import React from 'react';
import { Navigate } from 'react-router-dom';

/**
 * Backward-compatible Profile route redirector.
 * Automatically forwards legacy /profile bookmarks and links to the canonical
 * consolidated Settings interface at /settings?section=profile.
 */
export const ProfilePage: React.FC = () => {
  return <Navigate to="/settings?section=profile" replace />;
};
