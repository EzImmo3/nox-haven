-- NOX HAVEN cloud backup schema (Supabase/PostgreSQL).
-- Apply in Supabase SQL Editor. Never expose the service_role key in the browser.
create table if not exists public.study_snapshots (
  account_id uuid primary key references auth.users(id) on delete cascade,
  device_id text not null check (char_length(device_id) between 16 and 128),
  revision bigint not null check (revision >= 0),
  parent_revision bigint not null check (parent_revision >= 0),
  updated_at timestamptz not null,
  checksum text not null check (checksum ~ '^[a-f0-9]{64}$'),
  payload jsonb not null,
  constraint payload_size_limit check (pg_column_size(payload) <= 52428800)
);

alter table public.study_snapshots enable row level security;
revoke all on public.study_snapshots from anon;
grant select, insert, update, delete on public.study_snapshots to authenticated;

drop policy if exists "users read own snapshot" on public.study_snapshots;
create policy "users read own snapshot" on public.study_snapshots for select to authenticated using (auth.uid() = account_id);
drop policy if exists "users create own snapshot" on public.study_snapshots;
create policy "users create own snapshot" on public.study_snapshots for insert to authenticated with check (auth.uid() = account_id);
drop policy if exists "users update own snapshot" on public.study_snapshots;
create policy "users update own snapshot" on public.study_snapshots for update to authenticated using (auth.uid() = account_id) with check (auth.uid() = account_id);
drop policy if exists "users delete own snapshot" on public.study_snapshots;
create policy "users delete own snapshot" on public.study_snapshots for delete to authenticated using (auth.uid() = account_id);
