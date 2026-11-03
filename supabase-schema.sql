-- NOX HAVEN V6.1 — Supabase setup
-- Execute this script in the Supabase SQL editor.
-- The browser app must use ONLY the public anon key, never service_role.
create table if not exists public.study_snapshots (
  account_id uuid primary key references auth.users(id) on delete cascade,
  device_id text not null check (char_length(device_id) between 16 and 128),
  revision bigint not null check (revision >= 0),
  parent_revision bigint not null check (parent_revision >= 0),
  updated_at timestamptz not null default now(),
  checksum text not null check (checksum ~ '^[a-f0-9]{64}$'),
  payload jsonb not null,
  constraint snapshot_payload_size check (pg_column_size(payload) <= 10485760)
);
alter table public.study_snapshots enable row level security;
revoke all on public.study_snapshots from anon;
grant select, insert, update, delete on public.study_snapshots to authenticated;
drop policy if exists "Users read their own NOX HAVEN snapshot" on public.study_snapshots;
create policy "Users read their own NOX HAVEN snapshot" on public.study_snapshots for select to authenticated using (auth.uid() = account_id);
drop policy if exists "Users insert their own NOX HAVEN snapshot" on public.study_snapshots;
create policy "Users insert their own NOX HAVEN snapshot" on public.study_snapshots for insert to authenticated with check (auth.uid() = account_id);
drop policy if exists "Users update their own NOX HAVEN snapshot" on public.study_snapshots;
create policy "Users update their own NOX HAVEN snapshot" on public.study_snapshots for update to authenticated using (auth.uid() = account_id) with check (auth.uid() = account_id);
drop policy if exists "Users delete their own NOX HAVEN snapshot" on public.study_snapshots;
create policy "Users delete their own NOX HAVEN snapshot" on public.study_snapshots for delete to authenticated using (auth.uid() = account_id);
