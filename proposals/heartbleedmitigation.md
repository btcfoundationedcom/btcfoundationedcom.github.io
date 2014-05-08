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
Once you've typed this in and hit enter or return, it should return (as of April 2014): OpenSSL1.0.1g 7 Apr 2014
Later releases will result in a higher numbered version with a later date associated with it.  
As of April 2014, this (1.0.1.g 7 Apr 2014) is the most current OpenSSL version.   
If you didn't see that version appear, please follow the instructions [here](http://blog.quentinrousseau.fr/blog/2014/04/08/how-to-patch-cve-2014-0160-in-openssl/).
If the text in your terminal tells you that you don't have curl, enter the command that it tells you to, so that it can
install curl and then enter any password if necessary.  It will install curl.  When it's done, then go ahead and copy
and paste the commands into the terminal [as shown here](http://blog.quentinrousseau.fr/blog/2014/04/08/how-to-patch-cve-2014-0160-in-openssl/) and then check for openssl version.

Important Notes!

If you are running the terminal commands shown above (for Mac / OSX, Debian / Ubuntu, or Fedora / CentOS) on or after May 5, 2014,
be sure to also check again your OpenSSL version (see below):

Some key commands from terminal to get you information you need about your openssl:

openssl version

For more detailed information:

openssl version -a

If the version present does not match the most current OpenSSL version available (note that as of April 2014, the version shown as (1.0.1.g 7 Apr 2014) is the most current OpenSSL version), then follow the instructions [here](http://blog.quentinrousseau.fr/blog/2014/04/08/how-to-patch-cve-2014-0160-in-openssl/).

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


In closing, if there's something missing or flawed or just needs to be changed here, please by all means dive in and add, change, etc. This is intended to help everyone.  Thanks in advance!
