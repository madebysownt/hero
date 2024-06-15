export default async function Page() {
  await new Promise((resolve) => setTimeout(resolve, 200));
  return (
    <div className="flex flex-col flex-1 justify-center items-center">
      COMMING SOON.
    </div>
  );
  return (
    <form action="POST" className="mx-auto max-w-4xl">
      <h1 className="text-2xl/8 font-semibold text-zinc-950 sm:text-xl/8 dark:text-white">
        Settings
      </h1>
      <hr className="my-10 mt-6 w-full border-t border-zinc-950/10 dark:border-white/10" />
      <section className="grid gap-x-8 gap-y-6 sm:grid-cols-2">
        <div className="space-y-1">
          <h2 className="text-base/7 font-semibold text-zinc-950 sm:text-sm/6 dark:text-white">
            Languages
          </h2>
          {/* <p className="text-base/6 text-zinc-500 sm:text-sm/6 dark:text-zinc-400">
            Select your appearance language.
          </p> */}
        </div>
      </section>
      {/* <hr className="my-10 mt-6 w-full border-t border-zinc-950/10 dark:border-white/10" />
      <div className="flex justify-end gap-4">
        <Button className="inline-flex items-center gap-2 rounded-md bg-transparent py-1.5 px-3 text-sm/6 font-semibold text-black shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-100 data-[open]:bg-gray-100 data-[focus]:outline-1 data-[focus]:outline-white">
          Reset
        </Button>
        <Button className="inline-flex items-center gap-2 rounded-md bg-gray-700 py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-600 data-[open]:bg-gray-700 data-[focus]:outline-1 data-[focus]:outline-white">
          Save
        </Button>
      </div> */}
    </form>
  );
}
