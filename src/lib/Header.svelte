<script>
  import { base } from "$app/paths";
  import Fa from "svelte-fa/src/fa.svelte";
  import QRCode from "qrcode-svg";
  import { faAt, faCompass, faPhone, faQuoteLeft, faQuoteRight } from "@fortawesome/free-solid-svg-icons";
  import { t } from "$lib/translations";

  const qrcode = new QRCode({
    content: "https://scorsi.github.io/resume/",
    padding: 0,
    width: 64,
    height: 64,
    ecl: "H",
    join: true,
    color: "white",
    background: "transparent"
  });
</script>

<section
  class="mx-6 sm:mx-0 print:mx-0 lg:flex print:flex text-center lg:text-left print:text-left items-center md:gap-4 print:gap-4">
  <img src="{base}/img.png"
       class="mx-auto lg:mx-0 print:mx-0 z-[10] rounded-full h-40 sm:h-48 lg:h-64 shadow-2xl print:shadow-none print:h-16" />
  <ul
    class="divide-y lg:divide-y-2 divide-gray-400 bg-gray-200 lg:dark:bg-inherit dark:bg-gray-900 print:bg-inherit lg:bg-inherit lg:rounded-none p-4 sm:px-10 pt-12 rounded-t-xl md:rounded-t-2xl -mt-10 lg:m-0 lg:p-0 print:m-0 print:p-0 z-0">
    <li class="py-1 lg:py-2 print:py-2 font-light text-shadow-lg print:text-shadow-none">
      <h1 class="text-4xl sm:text-5xl md:text-6xl xl:text-7xl dark:text-gray-200 print:text-xl">Sylvain Corsini</h1>
      <p class="text-xl sm:text-2xl md:text-3xl xl:text-5xl text-gray-600 dark:text-gray-400 print:text-lg">{$t('common.job_title')}</p>
    </li>
    <li class="py-1 lg:py-2 print:py-2 print:hidden">
      <ul class="text-gray-600 dark:text-gray-400 text-left">
        <li>
          <Fa icon={faAt} class="inline" />
          <a href="mailto:sylvain.corsini@protonmail.com" target="_blank" class="text-blue-400 ml-1">
            sylvain.corsini@protonmail.com
          </a>
        </li>
        <li>
          <Fa icon={faPhone} class="inline" />
          <a href="tel:+33625243461" target="_blank" class="text-blue-400 ml-1">
            +33625243461
          </a>
        </li>
        <li>
          <Fa icon={faCompass} class="inline" />
          <a href="https://www.google.com/maps/place/La%20Madeleine/" target="_blank" class="text-blue-400 ml-1">
            La Madeleine, Région de Lille, France
          </a>
        </li>
      </ul>
    </li>
  </ul>
  <ul
    class="divide-y p-4 lg:divide-y-0 sm:ml-auto sm:place-self-start sm:px-10 lg:p-2 xl:p-4 rounded-b-xl md:rounded-b-2xl lg:rounded-lg bg-blue-600 dark:bg-gray-900 text-white print:hidden">
    <li class="flex items-center p-1 lg:rounded hover:bg-blue-400">
      <i class="devicon-github-plain lg:text-2xl"></i>
      <a href="https://github.com/scorsi" target="_blank" class="ml-2">scorsi</a>
    </li>
    <li class="flex items-center lg:mt-1 p-1 lg:rounded hover:bg-blue-400">
      <i class="devicon-linkedin-plain lg:text-2xl"></i>
      <a href="https://www.linkedin.com/in/dev-scorsi/" target="_blank" class="ml-2">dev-scorsi</a>
    </li>
  </ul>
  <ul class="text-gray-600 text-xs text-right hidden ml-auto print:block">
    <li>
      <a href="mailto:sylvain.corsini@protonmail.com" target="_blank" class="text-blue-400 mr-1">
        sylvain.corsini@protonmail.com
      </a>
      <Fa icon={faAt} class="inline" />
    </li>
    <li>
      <a href="tel:+33625243461" target="_blank" class="text-blue-400 mr-1">
        +33625243461
      </a>
      <Fa icon={faPhone} class="inline" />
    </li>
    <li>
      <a href="https://www.google.com/maps/place/La%20Madeleine/" target="_blank" class="text-blue-400 mr-1">
        La Madeleine, Région de Lille, France
      </a>
      <Fa icon={faCompass} class="inline" />
    </li>
  </ul>
  <div class="hidden rounded px-1 pb-1 text-center flex flex-col bg-blue-500 text-white print:block">
    <span class="text-xs">{$t('common.qrcode_text')}</span>
    <div class="px-1 py-0.5">
      {@html qrcode.svg()}
    </div>
  </div>
</section>
<hr class="hidden mt-2 print:block" />
<div class="z-0" data-aos="fade-up" data-aos-delay="500" data-aos-duration="1250">
  <div class="flex mt-8 sm:mt-16 print:mt-6 mx-10 sm:mx-0 print:mx-0">
    <div
      class="text-justify sm:text-center text-md text-gray-600 dark:text-gray-200 relative mx-auto print:text-xs print:text-left print:ml-20">
      <span class="absolute -left-3 -top-3 text-blue-200 dark:text-blue-900 text-2xl z-0 print:text-xl"><Fa icon={faQuoteLeft} /></span>
      <span class="absolute -right-3 -bottom-3 text-blue-200 dark:text-blue-900 text-2xl z-0 hidden sm:block print:hidden"><Fa
        icon={faQuoteRight} /></span>
      <p class="relative z-1">{@html $t('common.presentation_text')}</p>
    </div>
  </div>
</div>