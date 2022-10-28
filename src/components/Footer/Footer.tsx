import { Icon } from '../Icon'
import {
  faDiscord,
  faLinkedinIn,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons'
import classNames from 'classnames'
import { Link } from '../Link'
import { Logo } from '../Logo'
import { Text } from '../Text'
import { faArrowUpRight } from '@fortawesome/pro-solid-svg-icons'

export interface FooterProps {
  /**
   * The footer color style (blue-95 / blue-100)
   * @default 'dark'
   */
  variant?: 'dark' | 'extraDark'
}

export const Footer: React.FC<
  FooterProps & JSX.IntrinsicElements['footer']
> = ({ variant = 'dark', className, ...props }) => {
  return (
    <footer
      data-testid="footer"
      className={classNames(
        {
          'bg-blue-100': variant === 'extraDark',
          'bg-blue-95': variant === 'dark',
        },
        className
      )}
      {...props}
    >
      <section className="container py-8 space-y-8 md:py-12 xl:py-16">
        <Logo variant="secondary" />
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 xl:grid-cols-4">
          <div className="flex flex-col items-start space-y-4">
            <Text as="h4" variant="headingSm">
              Featured
            </Text>
            <Link href="/blog/third-biggest-stablecoin-ust-spirals-and-loses-50-in-a-day">
              Events that Caused the UST Crash
            </Link>
            <Link href="/blog/zero-knowledge-proof-how-it-works-and-the-alibaba-cave-experiment">
              The Alibaba Cave Experiment
            </Link>
            <Link href="/blog/byont-labs-joins-copernicus-beer-dao">
              Copernicus Beer DAO
            </Link>
          </div>
          <div className="flex flex-col items-start space-y-4">
            <Text as="h4" variant="headingSm">
              Information
            </Text>
            <Link href="/about">About us</Link>
            <Link href="/careers">Careers</Link>
            <Link
              href="https://sobol.io/d/public/byont/circles"
              rel="noopener noreferrer"
              target="_blank"
            >
              Sobol Circles
              <Icon className="inline ml-1" icon={faArrowUpRight} />
            </Link>
          </div>
          <div className="flex flex-col items-start space-y-4 xl:col-span-2 xl:place-self-end">
            <Text as="h4" variant="headingSm">
              Contact
            </Text>
            <Text className="flex flex-col">
              <Text as="span">Byont Labs</Text>
              <Text as="span">Torenallee 20, 5617 BC</Text>
              <Text as="span">Eindhoven, The Netherlands</Text>
            </Text>
            <Link href="mailto:info@byont.io">info@byont.io</Link>
          </div>
        </div>
      </section>
      <hr
        className={classNames({
          'border-blue-95': variant === 'extraDark',
          'border-blue-90': variant === 'dark',
        })}
      />
      <section className="container py-8 space-y-8 md:space-y-0 md:flex md:justify-between">
        <div className="flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-8">
          <Text>Byont Ventures B.V. © {new Date().getFullYear()}</Text>
          <Link href="/legal/privacy-policy">Privacy Policy</Link>
          <Link href="/legal/terms-and-conditions">Terms and Conditions</Link>
        </div>
        <div className="flex space-x-8">
          <Link
            rel="noopener noreferrer"
            target="_blank"
            href="https://discord.gg/xF5dtjZH73"
            aria-label="Discord"
          >
            <Icon icon={faDiscord} />
          </Link>
          <Link
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.linkedin.com/company/74883422"
            aria-label="LinkedIn"
          >
            <Icon icon={faLinkedinIn} />
          </Link>
          <Link
            rel="noopener noreferrer"
            target="_blank"
            href="https://twitter.com/ByontLabs"
            aria-label="Twitter"
          >
            <Icon icon={faTwitter} />
          </Link>
        </div>
      </section>
    </footer>
  )
}
