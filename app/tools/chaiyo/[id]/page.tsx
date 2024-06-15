import { baseUrl, version } from '@/constants/api';
import { regular_badges, skill_badges } from '@/constants/chaiyo_gcp_4';
import { CheckCircleIcon } from '@heroicons/react/16/solid';

import type { Metadata } from 'next';
export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  // read route params
  const id = params.id;

  // fetch data
  const profile = await fetch(
    `${baseUrl}/${version}/csb_profile?id=${params.id}`
  ).then((res) => res.json());

  return {
    title: `${profile.data.name} | ChaiyoGCP Result`,
    description:
      '#ChaiyoGCP is an online Google Cloud self-study program designed for developers in Thailand. It provides access to hands-on Google Cloud labs and fosters learning through a supportive community of peers.',
  };
}

export default async function Page({ params }: { params: { id: string } }) {
  const res = await fetch(`${baseUrl}/${version}/csb_profile?id=${params.id}`);

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  const data = await res.json();
  const upper_limit = new Date('Jun 15, 2024 EDT');
  const lower_limit = new Date('May 17, 2024 EDT');
  const name = data.data.name;
  let nSkill = 0;
  let nRegular = 0;
  const result: {
    name: string;
    earned: string;
    skill: boolean;
    valid: boolean;
    validDate: boolean;
  }[] = data.data.badges.map((badge: { name: string; earned: string }) => {
    const earnedDate = new Date(badge.earned);
    const dateCondition =
      earnedDate >= lower_limit && earnedDate <= upper_limit;
    if (regular_badges.includes(badge.name.trim()) && dateCondition) nRegular++;
    if (skill_badges.includes(badge.name.trim()) && dateCondition) nSkill++;
    return {
      name: badge.name,
      earned: badge.earned,
      skill: skill_badges.includes(badge.name.trim()),
      valid:
        (regular_badges.includes(badge.name.trim()) ||
          skill_badges.includes(badge.name.trim())) &&
        dateCondition,
      validDate: dateCondition,
    };
  });
  const tier =
    nSkill + nRegular >= 14 && nSkill >= 6
      ? 2
      : nSkill + nRegular >= 7 && nSkill >= 3
      ? 1
      : 0;

  return (
    <div className="mx-auto max-w-6xl">
      <h1 className="text-2xl/8 font-semibold text-zinc-950 sm:text-xl/8 dark:text-white">
        Hi, {name}
      </h1>
      <h2 className="text-base/7 font-semibold text-zinc-950 sm:text-sm/6 dark:text-white mt-8">
        Overview
      </h2>
      <div className="mt-4 grid gap-8 sm:grid-cols-2 xl:grid-cols-3">
        <div>
          <hr className="w-full border-t border-zinc-950/10 dark:border-white/10" />
          <div className="mt-6 text-lg/6 font-medium sm:text-sm/6">
            Your tier
          </div>
          <div className="mt-3 text-3xl/8 font-semibold sm:text-2xl/8">
            {tier}
          </div>
          <div className="mt-3 text-sm/6 sm:text-xs/6">
            <span
              className={
                (tier === 2 ? nSkill + nRegular >= 14 : nSkill + nRegular >= 7)
                  ? 'inline-flex items-center gap-x-1.5 rounded-md px-1.5 py-0.5 text-sm/5 font-medium sm:text-xs/5 forced-colors:outline bg-lime-400/20 text-lime-700 group-data-[hover]:bg-lime-400/30 dark:bg-lime-400/10 dark:text-lime-300 dark:group-data-[hover]:bg-lime-400/15'
                  : 'inline-flex items-center gap-x-1.5 rounded-md px-1.5 py-0.5 text-sm/5 font-medium sm:text-xs/5 forced-colors:outline bg-pink-400/15 text-pink-700 group-data-[hover]:bg-pink-400/25 dark:bg-pink-400/10 dark:text-pink-400 dark:group-data-[hover]:bg-pink-400/20'
              }>
              {nSkill + nRegular} / {tier === 2 ? 14 : 7}
            </span>
            <span className="text-zinc-500">
              {' '}
              of tier {tier > 0 ? tier : 1} requirements
            </span>
          </div>
        </div>
        <div>
          <hr className="w-full border-t border-zinc-950/10 dark:border-white/10" />
          <div className="mt-6 text-lg/6 font-medium sm:text-sm/6">
            Skill badges
          </div>
          <div className="mt-3 text-3xl/8 font-semibold sm:text-2xl/8">
            {nSkill}
          </div>
          <div className="mt-3 text-sm/6 sm:text-xs/6">
            <span
              className={
                (tier === 2 ? nSkill >= 6 : nSkill >= 3)
                  ? 'inline-flex items-center gap-x-1.5 rounded-md px-1.5 py-0.5 text-sm/5 font-medium sm:text-xs/5 forced-colors:outline bg-lime-400/20 text-lime-700 group-data-[hover]:bg-lime-400/30 dark:bg-lime-400/10 dark:text-lime-300 dark:group-data-[hover]:bg-lime-400/15'
                  : 'inline-flex items-center gap-x-1.5 rounded-md px-1.5 py-0.5 text-sm/5 font-medium sm:text-xs/5 forced-colors:outline bg-pink-400/15 text-pink-700 group-data-[hover]:bg-pink-400/25 dark:bg-pink-400/10 dark:text-pink-400 dark:group-data-[hover]:bg-pink-400/20'
              }>
              {nSkill} / {tier === 2 ? 6 : 3}
            </span>
            <span className="text-zinc-500">
              {' '}
              of tier {tier > 0 ? tier : 1} requirements
            </span>
          </div>
        </div>
        <div>
          <hr className="w-full border-t border-zinc-950/10 dark:border-white/10" />
          <div className="mt-6 text-lg/6 font-medium sm:text-sm/6">
            Regular badges
          </div>
          <div className="mt-3 text-3xl/8 font-semibold sm:text-2xl/8">
            {nRegular}
          </div>
        </div>
      </div>
      <h2 className="mt-14 text-base/7 font-semibold text-zinc-950 sm:text-sm/6 dark:text-white">
        Your result
      </h2>
      <div className="flow-root">
        <div className="mt-4 [--gutter:theme(spacing.6)] lg:[--gutter:theme(spacing.10)] -mx-[--gutter] overflow-x-auto whitespace-nowrap">
          <div className="inline-block min-w-full align-middle sm:px-[--gutter]">
            <table className="min-w-full text-left text-sm/6 text-zinc-950 dark:text-white">
              <thead className="text-zinc-500 dark:text-zinc-400">
                <tr>
                  <th className="border-b border-b-zinc-950/10 px-4 py-2 font-medium first:pl-[var(--gutter,theme(spacing.2))] last:pr-[var(--gutter,theme(spacing.2))] dark:border-b-white/10 sm:first:pl-1 sm:last:pr-1">
                    Name
                  </th>
                  <th className="border-b border-b-zinc-950/10 px-4 py-2 font-medium first:pl-[var(--gutter,theme(spacing.2))] last:pr-[var(--gutter,theme(spacing.2))] dark:border-b-white/10 sm:first:pl-1 sm:last:pr-1">
                    Earned Date
                  </th>
                  <th className="text-center border-b border-b-zinc-950/10 px-4 py-2 font-medium first:pl-[var(--gutter,theme(spacing.2))] last:pr-[var(--gutter,theme(spacing.2))] dark:border-b-white/10 sm:first:pl-1 sm:last:pr-1">
                    Regular
                  </th>
                  <th className="text-center border-b border-b-zinc-950/10 px-4 py-2 font-medium first:pl-[var(--gutter,theme(spacing.2))] last:pr-[var(--gutter,theme(spacing.2))] dark:border-b-white/10 sm:first:pl-1 sm:last:pr-1">
                    Skill
                  </th>
                </tr>
              </thead>
              <tbody>
                {result.map((badge, index) => (
                  <tr key={index} className="has-[[data-row-link][data-focus]]:outline has-[[data-row-link][data-focus]]:outline-2 has-[[data-row-link][data-focus]]:-outline-offset-2 has-[[data-row-link][data-focus]]:outline-blue-500 dark:focus-within:bg-white/[2.5%] hover:bg-zinc-950/[2.5%] dark:hover:bg-white/[2.5%]">
                    <td
                      className={`relative px-4 first:pl-[var(--gutter,theme(spacing.2))] last:pr-[var(--gutter,theme(spacing.2))] border-b border-zinc-950/5 dark:border-white/5 py-4 sm:first:pl-1 sm:last:pr-1 ${
                        badge.valid ? '' : 'line-through'
                      }`}>
                      {badge.name}
                    </td>
                    <td
                      className={`relative px-4 first:pl-[var(--gutter,theme(spacing.2))] last:pr-[var(--gutter,theme(spacing.2))] border-b border-zinc-950/5 dark:border-white/5 py-4 sm:first:pl-1 sm:last:pr-1 ${
                        badge.validDate ? '' : 'line-through'
                      }`}>
                      {badge.earned}
                    </td>
                    <td className="relative px-4 first:pl-[var(--gutter,theme(spacing.2))] last:pr-[var(--gutter,theme(spacing.2))] border-b border-zinc-950/5 dark:border-white/5 py-4 sm:first:pl-1 sm:last:pr-1">
                      <div className="flex rounded-lg px-2 py-2.5 text-center text-base/6 font-medium text-zinc-950 sm:py-2 sm:text-sm/5 data-[slot=icon]:*:size-6 data-[slot=icon]:*:shrink-0 data-[slot=icon]:*:fill-zinc-500 sm:data-[slot=icon]:*:size-5 data-[slot=icon]:last:*:ml-auto data-[slot=icon]:last:*:size-5 sm:data-[slot=icon]:last:*:size-4 data-[slot=avatar]:*:-m-0.5 data-[slot=avatar]:*:size-7 data-[slot=avatar]:*:[--ring-opacity:10%] sm:data-[slot=avatar]:*:size-6 data-[hover]:bg-zinc-950/5 data-[slot=icon]:*:data-[hover]:fill-zinc-950 data-[active]:bg-zinc-950/5 data-[slot=icon]:*:data-[active]:fill-zinc-950 data-[slot=icon]:*:data-[current]:fill-zinc-950 dark:text-white dark:data-[slot=icon]:*:fill-zinc-400 dark:data-[hover]:bg-white/5 dark:data-[slot=icon]:*:data-[hover]:fill-white dark:data-[active]:bg-white/5 dark:data-[slot=icon]:*:data-[active]:fill-white dark:data-[slot=icon]:*:data-[current]:fill-white">
                        {badge.valid && !badge.skill ? (
                          <CheckCircleIcon className="mx-auto" />
                        ) : (
                          <></>
                        )}
                      </div>
                    </td>
                    <td className="relative px-4 first:pl-[var(--gutter,theme(spacing.2))] last:pr-[var(--gutter,theme(spacing.2))] border-b border-zinc-950/5 dark:border-white/5 py-4 sm:first:pl-1 sm:last:pr-1">
                      <div className="flex rounded-lg px-2 py-2.5 text-center text-base/6 font-medium text-zinc-950 sm:py-2 sm:text-sm/5 data-[slot=icon]:*:size-6 data-[slot=icon]:*:shrink-0 data-[slot=icon]:*:fill-zinc-500 sm:data-[slot=icon]:*:size-5 data-[slot=icon]:last:*:ml-auto data-[slot=icon]:last:*:size-5 sm:data-[slot=icon]:last:*:size-4 data-[slot=avatar]:*:-m-0.5 data-[slot=avatar]:*:size-7 data-[slot=avatar]:*:[--ring-opacity:10%] sm:data-[slot=avatar]:*:size-6 data-[hover]:bg-zinc-950/5 data-[slot=icon]:*:data-[hover]:fill-zinc-950 data-[active]:bg-zinc-950/5 data-[slot=icon]:*:data-[active]:fill-zinc-950 data-[slot=icon]:*:data-[current]:fill-zinc-950 dark:text-white dark:data-[slot=icon]:*:fill-zinc-400 dark:data-[hover]:bg-white/5 dark:data-[slot=icon]:*:data-[hover]:fill-white dark:data-[active]:bg-white/5 dark:data-[slot=icon]:*:data-[active]:fill-white dark:data-[slot=icon]:*:data-[current]:fill-white">
                        {badge.valid && badge.skill ? (
                          <CheckCircleIcon className="mx-auto" />
                        ) : (
                          <></>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
