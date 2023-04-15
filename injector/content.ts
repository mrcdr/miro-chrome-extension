// Inject a main content script into Miro script environment
// See https://dev.to/jacksteamdev/advanced-config-for-rpce-3966#dynamic-content-scripts

// @ts-expect-error -- Special import statement to tell crxjs that main is a dynamic content script.
import main from '@/main?script&module'

const script = document.createElement('script')
script.src = chrome.runtime.getURL(main)
script.type = 'module'
document.head.prepend(script)
