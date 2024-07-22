import { Center, Flex, Text } from "@chakra-ui/react"

import { ButtonLink } from "@/components/Buttons"

const instructions = [
  {
    title: 'Read the rules and FAQs',
    description: 'Learn more about the Translatathon to make sure you understand the rules and translation process',
    cta: '/translatathon/details',
    ctaLabel: 'Learn'
  },
  {
    title: 'Apply to participate',
    description: 'Everyone needs to fill out the application form before the translation period starts to be eligible to participate',
    cta: 'https://translatathon.paperform.co/',
    ctaLabel: 'Apply'
  },
  {
    title: 'Join the project in Crowdin',
    description: 'Join the ethereum.org project and familiarize yourself with Crowdin, where all the translations will take place',
    cta: 'https://crowdin.com/project/ethereum-org',
    ctaLabel: 'Join',
  },
  {
    title: 'Join our Discord',
    description: 'Attend the onboarding calls and workshops, stay up to date with the latest news or ask questions',
    cta: 'https://discord.com/invite/ethereum-org',
    ctaLabel: 'Join',
  },
  {
    title: 'Translate! August 9th to August 18th',
    description: 'Translate content to earn points. Each word you translate counts towards your final score',
    cta: 'https://crowdin.com/project/ethereum-org',
    ctaLabel: 'Translate',
  },
  {
    title: 'Wait for evaluations',
    description: 'All participants translations will be evaluated to ensure they are human translations and meet the minimum quality threshold',
    cta: null
  },
  {
    title: 'Claim your prizes',
    description: 'We will announce the final results on August 29th and all eligible participants will receive an email with next steps to claim their prizes',
    cta: null
  },
]

export const StepByStepInstructions = () => {
  return (
    <Flex w="full" flexDir="column">
      {instructions.map((instruction, index) => (
        <Flex
          key={index}
          w="full"
          justifyContent='space-between'
          p={4}
          borderBottom="1px solid"
          borderColor="body.light"
          gap={4}
          flexDir={{base: 'column', md: 'row' }}
          alignItems={{ base: 'left', md: 'center' }}
        >
          <Flex
            gap={4}
            flexDir={{base: 'column', md: 'row' }}
            alignItems={{ base: 'left', md: 'center' }}
          >
            <Center
              minWidth="46px"
              maxWidth="46px"
              h="46px"
              borderRadius={8}
              background="background.base"
              boxShadow="2px 6px 18px 0px rgba(0, 0, 0, 0.10)"
              p={1}
            >
              <Text
                fontSize="4xl"
                fontWeight='bold'
                color="primary.base"
              >
                {index+1}
              </Text>
            </Center>
            <Flex flexDir='column'>
              <Text fontSize='xl' fontWeight='bold'>{instruction.title}</Text>
              <Text>{instruction.description}</Text>
            </Flex>
          </Flex>
          {instruction.cta ? (
            <Flex height="42px">
              <ButtonLink href={instruction.cta} variant="outline">{instruction.ctaLabel}</ButtonLink>
            </Flex>
          ): (<Flex w="140px" />)}
          
        </Flex>
      ))}
    </Flex>
  )
}