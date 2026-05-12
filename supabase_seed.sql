-- Sitek Industries — Supabase seed
-- Run this in your Supabase SQL Editor

-- Contacts table
create table if not exists contacts (
  id uuid default gen_random_uuid() primary key,
  name text not null,
  email text not null,
  message text not null,
  created_at timestamptz default now()
);

-- Bookings table
create table if not exists bookings (
  id uuid default gen_random_uuid() primary key,
  name text not null,
  email text not null,
  service text not null,
  date text not null,
  time text not null,
  notes text,
  created_at timestamptz default now()
);

-- Optional: enable Row Level Security
-- (for MVP, you can skip this — anon key can insert freely)

-- alter table contacts enable row level security;
-- alter table bookings enable row level security;

-- create policy "Allow anon inserts" on contacts for insert with check (true);
-- create policy "Allow anon inserts" on bookings for insert with check (true);
