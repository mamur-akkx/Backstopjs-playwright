/* 

🧠 What is BackstopJS?
BackstopJS is a Visual Regression Testing tool.

It checks:

“Did the UI change visually after a code change?”

Instead of checking code or text, it checks screenshots of pages.

It compares:

Old screenshot (baseline)

New screenshot (after change)

and shows:

What changed

Where it changed

By how much it changed

🖼️ What is Visual Regression Testing?

Imagine this:

Yesterday your login page looked like this
Today after a developer change, it looks slightly different

Even if functionality works, the UI might be broken:

Button moved

Text overlapped

Logo missing

Colors changed

Layout broken

BackstopJS catches this.

🧰 What does BackstopJS use?

BackstopJS uses a browser engine to take screenshots:

Playwright

Puppeteer

Chrome Headless

It is NOT a test runner like Playwright
It is a visual comparison engine

🧱 Core idea of BackstopJS

BackstopJS works in 4 simple steps

Step	What happens
1	Take baseline screenshots (good UI)
2	Save them
3	Take new screenshots (after change)
4	Compare both and show differences
🗂️ How BackstopJS is structured

BackstopJS uses a config file:

backstop.json


Inside it you define:

What pages to test

What screen size

What elements to capture

Example:

{
  "scenarios": [
    {
      "label": "Login Page",
      "url": "https://example.com/login",
      "selectors": ["document"]
    }
  ]
}


This means:

Take screenshot of the whole login page



🧪 How BackstopJS works in real life
Step 1 – Create baseline

You run:

npx backstop reference


This stores:

“This is how my app should look”


Step 2 – Run test after changes

You run:

npx backstop test


BackstopJS:

Takes new screenshots

Compares with baseline

Shows report

Step 3 – See visual report

It opens a report showing:

Old image

New image

Difference highlighted in pink

This is the power of BackstopJS.

🔍 What BackstopJS detects

BackstopJS catches:

✅ Layout shifts
✅ Broken CSS
✅ Missing buttons
✅ Overlapping text
✅ Font changes
✅ Color changes
✅ Responsive issues

It does NOT care about:

API

Clicks

Logic

Only visuals.



🧩 BackstopJS vs Playwright
Playwright	BackstopJS
Checks functionality	Checks UI look
Clicks, typing	Takes screenshots
Asserts text	Compares images
Fails on logic	Fails on design

They are best when used together

🔥 BackstopJS with Playwright

You can use Playwright to:

Login

Navigate

Prepare the page

Then BackstopJS:

Captures screenshots

Compares visuals

This gives you:

Full functional + visual coverage

🧠 Real-world example

You change a CSS file.

Without BackstopJS:

Tests pass

But UI is broken

With BackstopJS:

Test fails

Shows “Login button moved 50px”

You catch the bug before users do.

🏁 Final simple definition

BackstopJS is a tool that protects your website’s design.

It makes sure:

“My UI still looks the same after changes.”

If you want, next I can show you
how to use BackstopJS with Playwright step-by-step 🚀

yes carry on

Perfect — let’s continue and connect BackstopJS with Playwright step-by-step in a way you can actually use in real projects 🔥

🧩 Goal

We want this flow:

Playwright logs in → navigates → BackstopJS takes screenshots → BackstopJS compares visuals

This gives you real user flow + visual testing



🧱 Step 1 – Install BackstopJS
--------------------------------

Inside your Playwright project folder:

npm install --save-dev backstopjs


Then initialize it:
------------------

npx backstop init


This creates a folder:
---------------------

backstop_data/
backstop.json


This is Backstop’s brain.

🧱 Step 2 – Tell Backstop to use Playwright

Open backstop.json

Find this:

"engine": "puppeteer"
Change it to:

"engine": "playwright"


This means:

“Use Playwright browser instead of Puppeteer”


🧱 Step 3 – Define what to test
-----------------------------

In backstop.json, find scenarios and edit:

"scenarios": [
  {
    "label": "Login Page",
    "url": "https://the-internet.herokuapp.com/login",
    "selectors": ["document"],
    "delay": 1000
  }
]


This means:

Take screenshot of the whole login page

🧱 Step 4 – Create baseline (first time)

Run:
npx backstop reference


This saves:
“This is how the page should look”

These images are stored in:

backstop_data/bitmaps_reference

🧱 Step 5 – Make a UI change (or simulate)

Now:

Change CSS

Or resize

Or let developer push new UI

Then run:

npx backstop test


Backstop will:

Take new screenshots

Compare with old ones

Open a report

You will see:
🟢 Green → no change
🔴 Pink → UI changed

🧠 Now let’s add Playwright login

Many apps need login before taking screenshot.

We create a Playwright script:

📄 login.js
module.exports = async (page) => {
  await page.goto('https://the-internet.herokuapp.com/login');
  await page.fill('#username', 'tomsmith');
  await page.fill('#password', 'SuperSecretPassword!');
  await page.click('button[type="submit"]');
};

🧱 Step 6 – Tell Backstop to use this script

Edit backstop.json

Inside scenario:

"onBeforeScript": "login.js"


Full scenario:

{
  "label": "Secure Area",
  "url": "https://the-internet.herokuapp.com/secure",
  "onBeforeScript": "login.js",
  "selectors": ["#content"]
}


This means:

Before screenshot → run login → then capture page

🧱 Step 7 – Run Backstop again
npx backstop reference


Then later:

npx backstop test


Now you are visually testing a logged-in page.

🧠 This is how big companies use it

Flow in CI:

Playwright logs in

Backstop takes screenshots

UI is compared

If UI breaks → build fails

🏁 Simple summary
Tool	            Job

Playwright        	Drive the browser
BackstopJS        	Compare screenshots
Both together   	Detect UI bugs automatically 

*/