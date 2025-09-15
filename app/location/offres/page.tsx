"use client";
import React from 'react';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function LocationOffresPage() {
  const router = useRouter();

  useEffect(() => {
    router.replace('/location#offers');
  }, [router]);

  return null;
}