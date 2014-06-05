*Heartbleed and Reverse Heartbleed Mitigation Guide Proposal*

It was suggested by a member of the Education Committee that the following draft guide be provided here.
Please dive in and edit, add to, delete, modify, etc., as needed.

## Guide Process to Mitigating Vulnerabilities, Step-by-Step

### Key Steps: Upgrade and Check

I.  Read [this thing about backing up your bitcoin wallet](https://en.bitcoin.it/wiki/Securing_your_wallet), and also, [upgrade or install](https://bitcoin.org/en/download) Bitcoin Core. Vital.

Ia.  Do you use services that rely upon a two-factor authentication app, such as Google Authenticator?  
Make sure you take the below guidance (shown as the last step of part II).

II.  Your Machines / Operating Systems / App(s) - Updating / Patching Heartbleed (and more) from Terminal
First, open a terminal - how-to: [in Ubuntu / similar](http://askubuntu.com/questions/183775/how-do-i-open-a-terminal), or for Mac / OSX, [here](https://apple.stackexchange.com/questions/11323/how-can-i-open-a-terminal-window-directly-from-my-current-finder-location) or if you can try [here](http://www.iterm2.com/#/section/downloads).

Terminal is open? Great, now do the below commands depending on your operating system. 
Note it asks you for your password to continue once you hit enter after these commands, 
and it will prompt you Y/n at some point in the process, you want to type Y:

Mac / OSX: brew upgrade openssl

Debian / Ubuntu: sudo apt-get update && sudo apt-get upgrade
(Once that's all done, for Ubuntu, read and check [this](http://askubuntu.com/questions/444702/how-to-patch-the-heartbleed-bug-cve-2014-0160-in-openssl/444829#444829).)

Fedora / CentOS: sudo yum update openssl

Regardless of the operating system shown above, the following is an important final step in this process:
Type in your terminal, the following:
openssl version
Once you've typed this in and hit enter or return, it should return:
(as of April 2014): OpenSSL1.0.1g 7 Apr 2014
(as of June 5, 2014): OpenSSL1.0.1h 5 Jun 2014
Later releases will result in a higher numbered version with a later date associated with it.  
If you didn't see the most current version appear, please follow the more detailed instructions below, under the section titled, 
'What if I couldn't update to the most current version?'

Important Notes!

If you are running the terminal commands shown above (for Mac / OSX, Debian / Ubuntu, or Fedora / CentOS) on or after May 5, 2014,
be sure to also check again your OpenSSL version (see below):

Some key commands from terminal to get you information you need about your openssl:

openssl version

For more detailed information:

openssl version -a

'What if I couldn't update to the most current version?'

If you've done everything recommended above, and the version present on your system still does not match the most current OpenSSL version available, which can be found marked as 'latest' at [the OpenSSL binaries page](https://www.openssl.org/source/), then follow the instructions [here](http://blog.quentinrousseau.fr/blog/2014/04/08/how-to-patch-cve-2014-0160-in-openssl/). Note that the instructions shown at [that link](http://blog.quent.in/blog/2014/04/08/how-to-patch-cve-2014-0160-in-openssl/) were written for the initial heartbleed mitigation in early April, and do not address [the security issue released on June 5, 2014](https://www.openssl.org/news/secadv_20140605.txt) or any future notices.  For this reason, it is important that you ensure that after checking by using the openssl version command as shown above, that you check it against [the most current OpenSSL version available](https://www.openssl.org/source/) and update accordingly.  Thus, if the update and upgrade commands mentioned earlier in this post did not update OpenSSL on your system, the commands you would use would look like this, as of June 5, 2014:

(Copy and paste all of the following into your terminal and press enter)

```
curl https://www.openssl.org/source/openssl-1.0.1h.tar.gz | tar xz && cd openssl-1.0.1g && sudo ./config && sudo make && sudo make install
```

(Next, when that's done, copy and paste the following into your terminal, and press enter)


```
sudo ln -sf /usr/local/ssl/bin/openssl `which openssl`
```

By copying and pasting the two lines shown above, you  can ensure update to the most current OpenSSL version out June 5, 2014.
Note that if the version changes in the future (after June 5, 2014), you can always use these same commands, but instead of openssl-1.0.1h.tar.gz appearing in part of the first line, you will replace that text with [whatever OpenSSL version is released as most current](https://www.openssl.org/source/) in the future, prior to using the commands shown above.

You can also list all available ciphers, as follows:

openssl ciphers -v

Other notes, the most current OpenSSL version and FAQ, and additional details are found [here](https://www.openssl.org/support/faq.html).

Earlier in this guide Google Authenticator was mentioned. If you're using that, or another app intended to facilitate 
two-factor authentication, check the app and make sure that:  1) it is up to date, 2) if it isn't, update it, 
3) if it has codes to authorize you into [sites that are vulnerable to heartbleed](https://filippo.io/Heartbleed/), 
you may wish to not authorize into those sites until they get their stuff fixed, as a precaution.

If you are using Apple, do not rely solely upon Apple's automatic upgrades.
Check your version(s) by following the process above.
If you are using Windows or Apple, it is recommended you migrate off of those operating systems.
Consider dual-boot options [for Apple](https://help.ubuntu.com/community/MactelSupportTeam/AppleIntelInstallation#Dual-Boot:_Mac_OSX_and_Ubuntu) or [for Windows](https://wiki.ubuntu.com/WubiGuide) to ease your migration process away from such operating systems.
Ubuntu is one example that may work for you, although there are many others.

#### Passwords You Need To Change, Things That You Probably Need To Test

You can check for what passwords you should change - if you haven't already - [here](http://mashable.com/2014/04/09/heartbleed-bug-websites-affected/), and there's [a handy site](https://www.ssllabs.com/ssltest/) that allows you to test your site or any site on the internet for free for various issues and vulnerabilities.

#### Reverse Heartbleed

Reverse Heartbleed?  Yes, there is such a thing.  [This tool](https://reverseheartbleed.com/) checks for vulnerabilities in traditional clients - such as Dropbox, apps in iOS / Android, and more - and open agents, including social networks, webhooks, and more, via 'reverse heartbleed.' This is detailed in a handy blog post [here](http://blog.meldium.com/home/2014/4/10/testing-for-reverse-heartbleed). You may need some help to do this checking ~ get some if you need it ~ but if you haven't checked it yet and you understand what to do, have fun!

#### Github

If you are reading this, you use github. [Read Github's entire page](https://github.com/blog/1818-security-heartbleed-vulnerability) - it's not that long - on what to do to address the issues.  You may also want to visit your settings, and remove any authorized applications you have that have not yet fixed for heartbleed or reverse heartbleed.  If you haven't done this lately, go to account settings, two-factor authentication section (which should be on!) and note your recovery codes.

#### ResetTheNet

Consider making everything you do more secure.  This will help you and many others.  Check out [ResetTheNet](https://www.resetthenet.org/) to learn more.


In closing, if there's something missing or flawed or just needs to be changed here, please by all means dive in and add, change, etc. This is intended to help everyone.  Thanks in advance!

<script src="https://fightforthefuture.github.io/reset-the-net-banner/banner/rtn.js"
async></script>
