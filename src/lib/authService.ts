import { signOut } from 'firebase/auth';
import { auth } from './firebase';
import { supabase } from './supabase';

/**
 * Enterprise Provider-Backed Authentication Service
 * Manages provider sessions, actual sign-out termination across Firebase and Supabase,
 * and session state verification.
 */

export async function signOutFromProviders(): Promise<void> {
  const operations: Promise<any>[] = [];

  // 1. Terminate Firebase session if initialized
  if (auth && auth.currentUser) {
    operations.push(
      signOut(auth).catch((err) => {
        console.debug('Firebase signOut warning:', err);
      })
    );
  }

  // 2. Terminate Supabase session if initialized
  if (supabase) {
    operations.push(
      supabase.auth.signOut().catch((err) => {
        console.debug('Supabase signOut warning:', err);
      })
    );
  }

  await Promise.allSettled(operations);
}
